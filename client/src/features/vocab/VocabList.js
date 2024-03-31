import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVocabs, selectVocabList, selectPending } from "./vocabSlice";
import VocabListItem from "./VocabListItem";

const VocabList = () => {
  const dispatch = useDispatch();
  const vocabListSelector = useSelector(selectVocabList);
  const pendingSelector = useSelector(selectPending);

  useEffect(() => {
    dispatch(getVocabs());
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {pendingSelector
        ? "Loading..."
        : vocabListSelector.map((vocab) => {
            return <VocabListItem key={vocab._id} vocab={vocab} />;
          })}
    </ul>
  );
};

export default VocabList;
