import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import './DropDown.css'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { OneCard } from "../form/oneCard";
import { DeleteCard } from "../form/deleteCard";

function DropDown(props: { singleCard: any }) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { singleCard } = props;
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteCaard = () => {
    navigate('/deleteCard');
    setAnchorEl(null);
  }

  const navigateApiUpdate = () => {
    navigate('/onecard' , {
      state:{
        singleCard:{singleCard}
      }
    }
    );
  }
  return (
    <div>

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={navigateApiUpdate}>עריכה</MenuItem>
        <MenuItem onClick={deleteCaard}>מחיקה</MenuItem>
      </Menu>

    </div>
  );
}

export default DropDown;