import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import classes from "*.module.css";
const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit<">
        <Typography variant="h6" className={classes.title} color="inherit">
          <img
            src={}
            alt="Commerce.js"
            height="25px"
            className={classes.image}
          />
          Commerce.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
    </>
  );
};

export default Navbar;
