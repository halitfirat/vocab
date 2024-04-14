import React from "react";
import { Button, CircularProgress } from "@mui/material";

import styles from "./ButtonCircularProgress.module.scss";

const ButtonLabel = ({ isPending, label, ...rest }) => {
  return (
    <Button className={styles.button} data-label={label} {...rest}>
      <span className={styles.buttonLabel}>
        {isPending ? (
          <CircularProgress
            size={20}
            sx={{ marginTop: "2px" }}
            color="inherit"
          />
        ) : (
          label
        )}
      </span>
    </Button>
  );
};

export default ButtonLabel;
