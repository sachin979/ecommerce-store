import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import {
  Card,
  createTheme,
  Grid,
  makeStyles,
  Box,
  Typography,
  Button,
  Container,
  Backdrop,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import img from "./images/img1.jpg";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  gridContain: {
    flexGrow: 1,
  },
  prodCard: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
  },
  prodGrid: {
    padding: "10px",
  },
  imgDiv: {
    height: "180px",
    margin: "0 auto",
  },
  img: {
    height: "100%",
    maxWidth: "100%",
  },
  secRow: {
    display: "flex",
    flexDirection: "column",
  },
  pricing: {
    display: "flex",
    justifyContent: "space-between",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function App() {
  //Remove this
  const backup = console.error;

  console.error = function filterWarnings(msg) {
    const supressedWarnings = ["Warning", "other warning text"];

    if (!supressedWarnings.some((entry) => msg.includes(entry))) {
      backup.apply(console, arguments);
    }
  };
  //   console.error("I'll appear as a warning");
  //Remove this
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState();
  const [backdropOpen, setbackdropOpen] = useState(true);
  const getProducts = async (params) => {
    if (!params) {
      var url = "https://fakestoreapi.com/products/";
    } else {
      var url = "https://fakestoreapi.com/products/category/" + params;
    }
    console.log(url);
    setbackdropOpen(true);
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
    setbackdropOpen(false);
  };
  const getCategories = async () => {
    await axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log("use effect 1");
    getProducts();
    getCategories();
  }, []);
  //After Selecting category
  const isFirstRun = useRef(true);
  useEffect(() => {
    console.log(isFirstRun);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log("use effect 2");
    getProducts(category);
  }, [category]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <Container maxWidth="md">
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="category">Categories</InputLabel>
              <Select
                label="Categories"
                inputProps={{
                  name: "category",
                  id: "category",
                }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                color="primary"
              >
                {categories
                  ? categories.map((ctgry) => {
                      return (
                        <MenuItem value={ctgry} color="primary">
                          {ctgry}
                        </MenuItem>
                      );
                    })
                  : "Nothnh"}
              </Select>
            </FormControl>
          </div>
          <Grid container justifyContent="center">
            {!backdropOpen ? (
              products.map((prod) => {
                return (
                  <Grid item className={classes.prodGrid} key={prod.id} xs={12} sm={5} md={4}>
                    <ProductCard
                      image={prod.image}
                      title={prod.title}
                      price={prod.price}
                      rate={prod.rating.rate}
                    />
                  </Grid>
                );
              })
            ) : (
              <Backdrop className={classes.backdrop} open={backdropOpen}>
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
