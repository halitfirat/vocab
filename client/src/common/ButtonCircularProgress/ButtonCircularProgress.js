import React from "react";
import { Button, CircularProgress } from "@mui/material";

import styles from "./ButtonCircularProgress.module.scss";

const ButtonLabel = ({ isPending, label, ...rest }) => {
  return (
    <Button className={styles.btn} data-label={label} {...rest}>
      <span className={styles.btnLabel}>
        {isPending ? (
          <CircularProgress
            className={styles.btnIcon}
            size={16}
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
