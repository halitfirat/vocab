import React from "react";
import "./VocabListItem.module.scss";
import styles from "./VocabListItem.module.scss";

import UpdateVocab from "../UpdateVocab";
import DeleteVocab from "../DeleteVocab";

const VocabListItem = ({ vocab, isTest }) => {
  const { native, foreign } = vocab;

  const renderForeign = () => {
    return isTest ? <input /> : <span>- {foreign}</span>;
  };

  return (
    <li className={styles.listItem}>
      {native} {renderForeign()} <DeleteVocab vocab={vocab} />{" "}
      <UpdateVocab vocab={vocab} />
    </li>
  );
};

export default VocabListItem;
