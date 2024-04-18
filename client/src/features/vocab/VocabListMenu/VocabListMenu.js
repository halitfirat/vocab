import React from "react";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch, Button } from "@mui/material";

import locales from "../../../assets/locales";
import styles from "./VocabListMenu.module.scss";

const VocabListMenu = ({ isTest, setIsTest }) => {
  return (
    <div id="listMenu" className={styles.listMenu}>
      <FormControlLabel
        className={styles.switch}
        control={<Switch checked={isTest} color="error" />}
        onChange={() => setIsTest(!isTest)}
        label="Test"
      />

      <Button
        className={styles.button}
        component={Link}
        to="/vocabs/new"
        disabled={isTest}
        variant="contained"
        size="small"
      >
        {locales.en.placeholders.addVocabButtonLabel}
      </Button>
    </div>
  );
};

export default VocabListMenu;
