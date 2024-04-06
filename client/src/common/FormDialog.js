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

const FormDialog = ({
  open,
  onClose,
  dialogTitle,
  context,
  formFields,
  vocab,
  submit,
}) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: vocab,
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    submit(data);
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
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormDialog;
