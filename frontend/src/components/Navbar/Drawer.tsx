import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { DRAWER_SECTIONS, NAV_SECTIONS } from "./data";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemButton } from "@mui/material";

export default function Drawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <RxHamburgerMenu
        className="hamburgerIcon"
        onClick={() => setIsDrawerOpen(true)}
      />
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        <List disablePadding>
          {DRAWER_SECTIONS.map(({ nameToDisplay, path }) => {
            return (
              <ListItem
                className="list-item"
                key={nameToDisplay}
                disablePadding
              >
                <Link
                  onClick={() => setIsDrawerOpen(false)}
                  className="drawer-link"
                  to={path}
                >
                  <ListItemButton className="drawer-btn">
                    {nameToDisplay}
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </>
  );
}
