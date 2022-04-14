import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import logo from "../images/logo.png";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyle = makeStyles((theme) => ({
  headerMain:{
    marginBottom:"20px"
  },
  logo: { flexGrow: "1", justifyContent: "initial" },
  menuitem: {
    marginRight: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyle();
  return (
    <div className={classes.headerMain}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <Typography className={classes.menuitem} variant="body1">
            Categories
          </Typography>
          <Typography className={classes.menuitem} variant="body1">
            Account
          </Typography>
          <Typography className={classes.menuitem} variant="body1">
            More
          </Typography>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
