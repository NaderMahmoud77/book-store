import * as React from "react";
// Mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import { NaveLinks } from "./navLink";

export function ToggleBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 290 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="nav-links-toggle"
    >
      <List>
        <div className="logo-toggle">
          <img
            src={`${process.env.PUBLIC_URL}/images/Clint/client-image3.png`}
            alt="logo"
          />
        </div>
        <div className="close-icon">
          <CloseTwoToneIcon />
        </div>
        <NaveLinks value="showToggle" closeDrawer={() => setOpen(false)} />
      </List>
    </Box>
  );

  return (
    <div className="btn-nav-toggle">
      <Button onClick={toggleDrawer(true)}>
        <span className="toggle-bar">
          <span className="toggle toggle-1"></span>
          <span className="toggle toggle-2"></span>
          <span className="toggle toggle-3"></span>
        </span>
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
