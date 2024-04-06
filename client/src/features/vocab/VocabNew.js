import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import vocabFormFields from "./vocabFormFields";
import { addVocab, selectPending } from "./vocabSlice";

const VocabNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pendingSelector = useSelector(selectPending);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (vocabData) => {
    dispatch(addVocab({ vocabData, navigate }));
  };

  const renderFields = () => {
    return vocabFormFields.map(({ placeholder, name }) => {
      return (
        <div key={name}>
          <label htmlFor={name}>{placeholder}: </label>
          <input id={name} {...register(name, { required: true })} />
          {errors[name] && <span>This field is required</span>}
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderFields()}

      <button type="submit">{pendingSelector ? "Saving..." : "Save"}</button>
    </form>
  );
};

export default VocabNew;
