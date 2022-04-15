import { useState, useEffect } from "react";
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
}));

function App() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("use effect");

    const res = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
        })
        .catch((err) => console.error(err));
    };
    res();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container maxWidth="md">
          <Grid container>
            {products
              ? products.map((prod) => {
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
              : "Loading"}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
