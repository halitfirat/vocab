import React, { useState, useContext } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

import AlertDialog from "../../common/AlertDialog";
import { deleteVocab, selectDeleteVocabPending } from "./vocabSlice";
import locales from "../../assets/locales";
import { ProcessedVocabContext } from "./VocabList/VocabList";

const DeleteVocab = ({ vocab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { processedVocab, setProcessedVocab } = useContext(
    ProcessedVocabContext
  );
  const deleteVocabPending = useSelector(selectDeleteVocabPending);

  const { _id, native, foreign } = vocab;
  const vocabLiterals = `'${native} - ${foreign}'`;

  const onDeleteVocab = () => {
    setProcessedVocab({ ...processedVocab, deleteVocabId: _id });
    dispatch(deleteVocab(_id));
  };

  return (
    <>
      <IconButton aria-label="edit" onClick={() => setIsOpen(true)}>
        <DeleteIcon />
      </IconButton>

      <AlertDialog
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        dialogTitle={locales.en.placeholders.vocabDeleteDialogTitle}
        dialogContentText={locales.en.placeholders.vocabDeleteDialogContentText.replace(
          "{vocab}",
          vocabLiterals
        )}
        isPending={processedVocab.deleteVocabId === _id && deleteVocabPending}
        agreeButtonLabel={locales.en.placeholders.vocabDeleteButtonLabel}
        agree={onDeleteVocab}
      />
    </>
  );
};

export default DeleteVocab;
