import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AlertDialog from "../../common/AlertDialog/AlertDialog";
import locales from "../../assets/locales";

const VocabDelete = ({ vocab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { native, foreign } = vocab;
  const vocabLiterals = `'${native} - ${foreign}'`;

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
      />
    </>
  );
};

export default VocabDelete;
