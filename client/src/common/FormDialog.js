import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material/";
import { useForm } from "react-hook-form";

import ButtonCircularProgress from "./ButtonCircularProgress/ButtonCircularProgress";
import locales from "../assets/locales";

const FormDialog = ({
  open,
  onClose,
  dialogTitle,
  context,
  formFields,
  vocab,
  isPending,
  submitButtonLabel,
  submit,
}) => {
  const { _id, native, foreign } = vocab;
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      _id,
      native,
      foreign,
    },
  });
  const { errors, isSubmitted } = formState;

  const onSubmit = async (data) => {
    await submit(data);

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{dialogTitle}</DialogTitle>

        <DialogContent>
          {context ? <DialogContentText>{context}</DialogContentText> : null}

          {formFields.map(({ placeholder, name, validation }) => {
            return (
              <TextField
                key={name}
                autoFocus
                margin="dense"
                id={name}
                label={placeholder}
                fullWidth
                variant="outlined"
                size="small"
                {...register(name, validation)}
                error={isSubmitted && errors[name] !== undefined ? true : false}
                helperText={
                  errors[name] !== undefined ? errors[name].message : null
                }
              />
            );
          })}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} variant="secondary">
            {locales.en.placeholders.cancelButtonLabel}
          </Button>

          <ButtonCircularProgress
            label={submitButtonLabel}
            variant="contained"
            autoFocus
            isPending={isPending}
            type="submit"
          />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormDialog;
