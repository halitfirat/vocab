import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import ButtonCircularProgress from "./ButtonCircularProgress/ButtonCircularProgress";

const AlertDialog = ({
  open,
  handleClose,
  dialogTitle,
  dialogContentText,
  isPending,
  agreeButtonLabel,
  agree,
}) => {
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContentText}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Disagree
          </Button>

          <ButtonCircularProgress
            label={agreeButtonLabel}
            variant="outlined"
            color="error"
            autoFocus
            onClick={agree}
            isMending={isPending}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
