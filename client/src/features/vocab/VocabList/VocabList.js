import React, { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import styles from "./VocabList.module.scss";

import {
  getVocabs,
  selectVocabList,
  selectGetVocabsPending,
} from "../vocabSlice";
import VocabListMenu from "../VocabListMenu/VocabListMenu";
import VocabListItem from "../VocabListItem/VocabListItem";

export const ProcessedVocabContext = createContext();

const VocabList = () => {
  const [isTest, setIsTest] = useState(false);
  const [processedVocab, setProcessedVocab] = useState({
    deleteVocabId: "",
    updateVocabId: "",
  });

  const dispatch = useDispatch();
  const vocabList = useSelector(selectVocabList);
  const getVocabsPending = useSelector(selectGetVocabsPending);

  useEffect(() => {
    dispatch(getVocabs());
    // eslint-disable-next-line
  }, []);

  const renderList = () => {
    return (
      <>
        <VocabListMenu isTest={isTest} setIsTest={setIsTest} />

        <ul className={styles.list}>
          {vocabList.map((vocab) => {
            return (
              <VocabListItem key={vocab._id} vocab={vocab} isTest={isTest} />
            );
          })}
        </ul>
      </>
    );
  };

  const renderLink = () => {
    return (
      <span className={styles.linkText}>
        There are no vocabs. Click{" "}
        <Link className={styles.link} to="/vocabs/new">
          here
        </Link>{" "}
        to add new vocabs.
      </span>
    );
  };

  return (
    <ProcessedVocabContext.Provider
      value={{ processedVocab, setProcessedVocab }}
    >
      <div className={styles.container}>
        {getVocabsPending ? (
          <div className={styles.circularProgressContainer}>
            <CircularProgress />
          </div>
        ) : vocabList.length > 0 ? (
          renderList()
        ) : (
          renderLink()
        )}
      </div>
    </ProcessedVocabContext.Provider>
  );
};

export default VocabList;
