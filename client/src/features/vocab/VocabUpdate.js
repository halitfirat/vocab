import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import vocabFormFields from "./vocabFormFields";
import { updateVocab } from "./vocabSlice";
import FormDialog from "../../common/FormDialog";
import locales from "../../assets/locales";

const VocabUpdate = ({ vocab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const onUpdateVocab = (vocabData) => {
    dispatch(updateVocab(vocabData));
  };

  return (
    <>
      <IconButton aria-label="edit" onClick={() => setIsOpen(true)}>
        <EditIcon />
      </IconButton>

      <FormDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        dialogTitle={locales.en.placeholders.vocabUpdateDialogTitle}
        submit={onUpdateVocab}
        vocab={vocab}
        formFields={vocabFormFields}
      />
    </>
  );
};

export default VocabUpdate;
