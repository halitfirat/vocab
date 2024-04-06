import React from "react";
import "./VocabListItem.module.scss";

import VocabUpdate from "../VocabUpdate";
import VocabDelete from "../VocabDelete";

const VocabListItem = ({ vocab, isTest }) => {
  const { native, foreign } = vocab;

  const renderForeign = () => {
    return isTest ? <input /> : <span>- {foreign}</span>;
  };

  return (
    <li>
      {native} {renderForeign()} <VocabDelete vocab={vocab} />{" "}
      <VocabUpdate vocab={vocab} />
    </li>
  );
};

export default VocabListItem;
