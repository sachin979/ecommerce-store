import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import logo from "../images/logo.png";
import {
  makeStyles,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Badge,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import CategoryIcon from "@material-ui/icons/Category";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/More";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useStyle = makeStyles((theme) => ({
  headerMain: {
    marginBottom: "20px",
  },
  logo: { flexGrow: "1", justifyContent: "initial" },
  menuitem: {
    marginRight: theme.spacing(3),
  },
}));

function Header(props) {
  //Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    //  / setState({ ...state, [anchor]: open });
    setDrawerOpen(open);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyle();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let cartCount = cart.length;
  console.log(cartCount);
  return (
    <div className={classes.headerMain}>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <div>
              <IconButton
                onClick={toggleDrawer(true)}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>

              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                  <List>
                    {["Categories", "Account", "More"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          {index == 1 ? (
                            <CategoryIcon />
                          ) : index == 2 ? (
                            <AccountCircleIcon />
                          ) : (
                            <MoreIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Drawer>
            </div>
          ) : (
            ""
          )}

          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          {!isMobile ? (
            <React.Fragment>
              <Typography className={classes.menuitem} variant="body1">
                Categories
              </Typography>
              <Typography className={classes.menuitem} variant="body1">
                Account
              </Typography>
              <Typography className={classes.menuitem} variant="body1">
                More
              </Typography>
            </React.Fragment>
          ) : (
            ""
          )}

          <IconButton color="secondary" href="/cart">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
