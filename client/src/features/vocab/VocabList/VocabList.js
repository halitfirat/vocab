import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import styles from "./VocabList.module.scss";

import { getVocabs, selectVocabList, selectPending } from "../vocabSlice";
import VocabListItem from "../VocabListItem/VocabListItem";

const VocabList = () => {
  const [isTest, setIsTest] = useState(false);

  const dispatch = useDispatch();
  const vocabListSelector = useSelector(selectVocabList);
  const pendingSelector = useSelector(selectPending);

  useEffect(() => {
    dispatch(getVocabs());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <button onClick={() => setIsTest(!isTest)}>Toggle Test</button>

      <div className={styles.listContainer}>
        <ul>
          {pendingSelector ? (
            <CircularProgress />
          ) : (
            vocabListSelector.map((vocab) => {
              return (
                <VocabListItem key={vocab._id} vocab={vocab} isTest={isTest} />
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default VocabList;
