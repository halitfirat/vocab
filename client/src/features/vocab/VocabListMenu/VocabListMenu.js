import React from "react";
import { Link } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";

import styles from "./VocabListMenu.module.scss";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "../../../common/IconButton";

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
          component={Link}
          backgroundcolor="#568203"
          backgroundcolorhover="#517a03"
          disabled={isTest}
          icon={AddIcon}
          to="/vocabs/new"
        />
      </div>
    </div>
  );
};

export default VocabListMenu;
