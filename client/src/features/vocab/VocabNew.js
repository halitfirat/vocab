import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import formFields from "./formFields";
import { addVocab, selectLoading } from "./vocabSlice";

const VocabNew = () => {
  const dispatch = useDispatch();
  const loadingSelector = useSelector(selectLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addVocab(data));
  };

  const renderFields = () => {
    return formFields.map(({ placeholder, name }) => {
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

      <button type="submit">{loadingSelector ? "Loading..." : "Save"}</button>
    </form>
  );
};

export default VocabNew;
