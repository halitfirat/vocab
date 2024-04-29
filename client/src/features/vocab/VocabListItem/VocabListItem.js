import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import UpdateVocab from "../UpdateVocab";
import DeleteVocab from "../DeleteVocab";
import VocabListItemTest from "../VocabListItemTest/VocabListItemTest";
import styles from "./VocabListItem.module.scss";

const VocabListItem = ({ vocab, isTest }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateVocabOpen, setUpdateVocabOpen] = useState(false);
  const [deleteVocabOpen, setDeleteVocabOpen] = useState(false);
  const open = Boolean(anchorEl);

  const { native, foreign } = vocab;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);

    const currentTargetId = event.currentTarget.id;
    if (currentTargetId === "update-vocab") {
      setUpdateVocabOpen(true);
    } else if (currentTargetId === "delete-vocab") {
      setDeleteVocabOpen(true);
    }
  };

  const renderMenu = () => {
    return (
      <>
        {" "}
        <IconButton
          className={`${styles.menuButton} ${isTest ? styles.isTest : ""}`}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          disabled={isTest}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem id="update-vocab" onClick={handleClose}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Edit</ListItemText>
          </MenuItem>

          <MenuItem id="delete-vocab" onClick={handleClose}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      <li className={`${styles.listItem} ${isTest ? styles.isTest : ""}`}>
        {isTest ? (
          <VocabListItemTest vocab={vocab} />
        ) : (
          <span className={styles.vocab}>
            {native} - {foreign}
          </span>
        )}
        {renderMenu()}
      </li>

      <UpdateVocab
        vocab={vocab}
        isOpen={updateVocabOpen}
        setIsOpen={setUpdateVocabOpen}
      />
      <DeleteVocab
        vocab={vocab}
        isOpen={deleteVocabOpen}
        setIsOpen={setDeleteVocabOpen}
      />
    </>
  );
};

export default VocabListItem;
