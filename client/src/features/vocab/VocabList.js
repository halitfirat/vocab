import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getVocabs, selectVocabList, selectLoading } from "./vocabSlice";

const VocabList = () => {
  const dispatch = useDispatch();
  const vocabListSelector = useSelector(selectVocabList);
  const loadingSelector = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getVocabs());
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {loadingSelector
        ? "Loading..."
        : vocabListSelector.map((v) => {
            return (
              <li key={v._id}>
                {v.native} - {v.foreign}
              </li>
            );
          })}
    </ul>
  );
};

export default VocabList;
