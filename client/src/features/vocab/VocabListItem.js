import React from "react";

import VocabUpdate from "./VocabUpdate";

const VocabListItem = ({ vocab }) => {
  const { native, foreign } = vocab;

  return (
    <li>
      {native} - {foreign}
      <VocabUpdate vocab={vocab} />
    </li>
  );
};

export default VocabListItem;
