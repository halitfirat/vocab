import React from "react";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import styles from "./VocabListMenu.module.scss";
import AddIcon from "@mui/icons-material/Add";
import locales from "../../../assets/locales";

const VocabListMenu = ({ isTest, setIsTest }) => {
  return (
    <div id="listMenu" className={styles.listMenuContainer}>
      <div className={styles.listMenu}>
        <FormControlLabel
          className={styles.switch}
          control={<Switch checked={isTest} color="error" />}
          onChange={() => setIsTest(!isTest)}
          label="Test"
        />

        <IconButton
          className={styles.addButton}
          component={Link}
          to="/vocabs/new"
          disabled={isTest}
          aria-label={locales.en.placeholders.newVocabButtonAriaLabel}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default VocabListMenu;
