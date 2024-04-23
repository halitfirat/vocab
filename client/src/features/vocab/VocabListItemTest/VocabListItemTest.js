import React from "react";
import { TextField, Button } from "@mui/material";
// import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
// import TitleIcon from "@mui/icons-material/Title";
// import CompareIcon from "@mui/icons-material/Compare";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import InsertCommentIcon from "@mui/icons-material/InsertComment";
// import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
// import TelegramIcon from "@mui/icons-material/Telegram";

import styles from "./VocabListItemTest.module.scss";

const VocabListItemTest = ({ native }) => {
  return (
    <div className={styles.test}>
      <TextField
        // key={name}
        // autoFocus
        margin="dense"
        // id={name}
        label={native}
        fullWidth
        variant="outlined"
        size="small"
        // {...register(name, validation)}
        // errors={errors[name]}
        // helperText={errors[name] !== undefined ? errors[name].message : null}
        sx={{ m: "12px 0 4px 0" }}
      />

      <Button variant="contained" size="large">
        Check
      </Button>
    </div>
  );
};

export default VocabListItemTest;
