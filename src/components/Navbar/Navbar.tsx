import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog, FavoriteTable } from "..";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programing React Test Senior
          </Typography>
          <IconButton aria-label="favorite" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
