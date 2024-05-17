import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { incrementVocabScore } from "../vocabSlice";
import SuccessAnimation from "../../../common/SuccessAnimation/SuccessAnimation";
import enterIcon from "../../../assets/images/enterIcon.png";
import styles from "./VocabListItemTest.module.scss";

const VocabListItemTest = ({ vocab }) => {
  const dispatch = useDispatch();
  const [answerCorrect, setAnswerCorrect] = useState(false);

  const { native, foreign, _id } = vocab;
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    if (data?.[native] === foreign) {
      setAnswerCorrect(true);

      dispatch(incrementVocabScore(_id));
    }
  };

  return (
    <form className={styles.test} onSubmit={handleSubmit(onSubmit)}>
      {answerCorrect ? (
        <div className={styles.animationWrapper}>
          <SuccessAnimation />
        </div>
      ) : (
        <TextField
          margin="dense"
          label={native}
          fullWidth
          variant="outlined"
          size="small"
          {...register(native)}
          sx={{ m: "12px 0 4px 0" }}
          required
        />
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={answerCorrect}
      >
        <img className={styles.enterIcon} src={enterIcon} alt="Enter Icon" />
      </Button>
    </form>
  );
};

export default VocabListItemTest;
