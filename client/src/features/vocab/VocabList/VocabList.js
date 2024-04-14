import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import styles from "./VocabList.module.scss";

import {
  getVocabs,
  selectVocabList,
  selectGetVocabsPending,
} from "../vocabSlice";
import VocabListItem from "../VocabListItem/VocabListItem";

export const ProcessedVocabContext = createContext();

const VocabList = () => {
  const [isTest, setIsTest] = useState(false);
  const [processedVocab, setProcessedVocab] = useState({
    deleteVocabId: "",
    updateVocabId: "",
  });

  const dispatch = useDispatch();
  const vocabListSelector = useSelector(selectVocabList);
  const getVocabsPending = useSelector(selectGetVocabsPending);

  useEffect(() => {
    dispatch(getVocabs());
    // eslint-disable-next-line
  }, []);

  return (
    <ProcessedVocabContext.Provider
      value={{ processedVocab, setProcessedVocab }}
    >
      <button onClick={() => setIsTest(!isTest)}>Toggle Test</button>

      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {getVocabsPending ? (
            <div className={styles.circularProgressContainer}>
              <CircularProgress />
            </div>
          ) : (
            vocabListSelector.map((vocab) => {
              return (
                <VocabListItem key={vocab._id} vocab={vocab} isTest={isTest} />
              );
            })
          )}
        </ul>
      </div>
    </ProcessedVocabContext.Provider>
  );
};

export default VocabList;
