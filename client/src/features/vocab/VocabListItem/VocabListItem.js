import React from "react";

import UpdateVocab from "../UpdateVocab";
import DeleteVocab from "../DeleteVocab";
import styles from "./VocabListItem.module.scss";

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
