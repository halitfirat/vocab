import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { CircularProgress } from "@mui/material";

import vocabFormFields from "../vocabFormFields";
import { addVocab, selectAddVocabPending } from "../vocabSlice";
import locales from "../../../assets/locales";
import styles from "./AddVocab.module.scss";

const AddVocab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addVocabPending = useSelector(selectAddVocabPending);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (vocabData) => {
    dispatch(addVocab({ vocabData, navigate }));
  };

  const renderFormFields = () => {
    return vocabFormFields.map(({ placeholder, name }) => {
      return (
        <label key={name} id={name} className={styles.input}>
          <input
            type="text"
            {...register(name, {
              required: true,
              onChange: (e) =>
                e.target.value.length > 0
                  ? e.target.classList.add(styles.white)
                  : e.target.classList.remove(styles.white),
            })}
          />

          <span>
            <span className={errors[name] && styles.error}>
              {errors[name]
                ? placeholder + " is a required field"
                : placeholder}
            </span>
          </span>
        </label>
      );
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <IconButton
        className={styles.cancelButton}
        component={Link}
        to="/vocabs"
        aria-label={locales.en.placeholders.cancelNewVocabButtonAriaLabel}
      >
        <CloseIcon />
      </IconButton>

      <div className={styles.inputContainer}>{renderFormFields()}</div>

      <button type="submit" className={styles.btn}>
        {" "}
        {addVocabPending ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          locales.en.placeholders.vocabAddButtonLabel
        )}
      </button>
    </form>
  );
};

export default AddVocab;
