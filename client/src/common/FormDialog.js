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

const FormDialog = ({
  open,
  onClose,
  dialogTitle,
  context,
  formFields,
  vocab,
  submitButtonLabel,
  isPending,
  submit,
}) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: vocab,
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    await submit(data);

    onClose();
  };

  return (
    <div>
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
                  errors={errors[name]}
                  helperText={
                    errors[name] !== undefined ? errors[name].message : null
                  }
                />
              );
            })}
          </DialogContent>

          <DialogActions>
            <Button onClick={onClose} variant="outlined">
              Cancel
            </Button>

            <ButtonCircularProgress
              label={submitButtonLabel}
              variant="outlined"
              autoFocus
              isPending={isPending}
              type="submit"
            />
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormDialog;
