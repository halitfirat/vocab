import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import vocabFormFields from "./vocabFormFields";
import { updateVocab, selectUpdateVocabPending } from "./vocabSlice";
import FormDialog from "../../common/FormDialog";
import locales from "../../assets/locales";
import { ProcessedVocabContext } from "./VocabList/VocabList";

const UpdateVocab = ({ vocab, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { processedVocab, setProcessedVocab } = useContext(
    ProcessedVocabContext
  );
  const updateVocabPending = useSelector(selectUpdateVocabPending);

  const { _id } = vocab;

  const onUpdateVocab = async (vocabData) => {
    setProcessedVocab({ ...processedVocab, updateVocabId: _id });

    const response = await dispatch(updateVocab(vocabData));
    return response;
  };

  return (
    <FormDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      dialogTitle={locales.en.placeholders.vocabUpdateDialogTitle}
      formFields={vocabFormFields}
      vocab={vocab}
      submitButtonLabel={locales.en.placeholders.vocabUpdateButtonLabel}
      isPending={processedVocab.updateVocabId === _id && updateVocabPending}
      submit={onUpdateVocab}
    />
  );
};

export default UpdateVocab;
