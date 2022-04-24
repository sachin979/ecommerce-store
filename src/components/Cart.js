import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Card, makeStyles, Grid, Typography, Container, Divider } from "@material-ui/core";
import img from "../images/img1.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
const useStyle = makeStyles((theme) => ({
  leftContainer: {
    backgroundColor: "#ddd",
  },
  rightContainer: {
    height: "85vh",
    backgroundColor: "#bbb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "5px",
  },
  mainDiv: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  card: {
    width: "90%",
    margin: "0 auto",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  imgDiv: {
    width: "100%",
  },
  img: {
    width: "auto",
    height: "120px",
  },
  centerText: {
    margin: "auto 0",
  },
  quantity: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
  },
  minus: {
    backgroundColor: "#bbbbbb",
    width: "40px",
    height: "30px",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
  },
  plus: {
    backgroundColor: "#bbbbbb",
    width: "40px",
    height: "30px",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
  },
  itemCount: {
    backgroundColor: "#ffffff",
    width: "40px",
    height: "26px",
    fontSize: "20px",
    borderBottom: "2px solid #bbbbbb",
    borderTop: "2px solid #bbbbbb",
  },
}));
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const url = "https://fakestoreapi.com/products/";
  const classes = useStyle();
  const [cartProduct, setcartProduct] = useState([]);
  useEffect(() => {
    cart.forEach((i) => {
      const fech = async () => {
        await axios
          .get(url + i)
          .then((resp) => {
            let obj = { [i]: resp.data };
            setcartProduct((cartProduct) => [...cartProduct, { ...resp.data, quantity: 1 }]);
          })
          .catch((err) => console.log(err));
      };
      fech();
    });
  }, []);
  useEffect(() => console.log(cartProduct), [cartProduct]);

  const decCount = (obj) => {
    console.log(obj);
    let index = cartProduct.indexOf(obj);
    if (obj.quantity == 1) {
      setcartProduct([...cartProduct.slice(0, index), ...cartProduct.slice(index + 1)]);
    } else {
      obj.quantity = obj.quantity + 1;
      setcartProduct([...cartProduct.slice(0, index), obj, ...cartProduct.slice(index + 1)]);
    }
  };
  const incCount = (obj) => {
    console.log(obj);
    let index = cartProduct.indexOf(obj);
    obj.quantity = obj.quantity + 1;
    setcartProduct([...cartProduct.slice(0, index), obj, ...cartProduct.slice(index + 1)]);
    //setcartProduct((cartProduct) => [...cartProduct, { [id]: { quantity: quantity + 1 } }]);
  };
  return (
    <div>
      <Header />
      <Container max-width="md">
        <Grid container justifyContent="center">
          <Grid item sm={8} className={classes.leftContainer}>
            <div className={classes.mainDiv}>
              {cartProduct.map((element) => {
                return (
                  <Card className={classes.card}>
                    <Grid container direction="column">
                      <Grid item container>
                        <Grid item sm={3} xs={5}>
                          <div className={classes.imgDiv}>
                            <img className={classes.img} src={element.image} alt="" />
                          </div>
                        </Grid>
                        <Grid item container sm={9} xs={7}>
                          <Grid item sm={7} xs={12} className={classes.centerText}>
                            <Typography variant="body1">{element.title}</Typography>
                            <Typography variant="body1">Rs.{element.price}</Typography>
                          </Grid>
                          <Grid item sm={5} xs={12} className={classes.centerText}>
                            <Typography>Quantity</Typography>
                            <div className={classes.quantity}>
                              <span className={classes.minus} onClick={() => decCount(element)}>
                                -
                              </span>{" "}
                              <span className={classes.itemCount}>{element.quantity}</span>{" "}
                              <span className={classes.plus} onClick={() => incCount(element)}>
                                +
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                );
              })}
            </div>
          </Grid>
          <Grid item sm={4} className={classes.rightContainer}>
            <div className={classes.address}>
              <Typography> Delivery address </Typography>
              <Typography>Sachin S Naik</Typography>
              <Typography>
                Flat no 979, Prestige Society 1st Phase,
                <br /> 2nd Block, Electronic City, <br />
                Bengaluru - 560001
                <br /> Landmark: St. Marys School
              </Typography>
            </div>
            <div className={classes.total}>
              <Typography>Order Summary</Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Subtotal</Typography>

                  <Typography>Shipping Charges</Typography>

                  <Typography>Total</Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Typography>5454</Typography>

                  <Typography>1234</Typography>
                  <Divider></Divider>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;
