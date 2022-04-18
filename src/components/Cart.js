import React, { useState } from "react";
import Header from "./Header";
import { Card, makeStyles, Grid, Typography } from "@material-ui/core";
import img from "../images/img1.jpg";
const useStyle = makeStyles((theme) => ({
  mainDiv: {
    height: "90vh",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  card: {
    width: "70%",
    margin: "0 auto",
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
}));
const Cart = () => {
  const classes = useStyle();

  return (
    <div>
      <Header />
      <div className={classes.mainDiv}>
        <Card className={classes.card}>
          <Grid container direction="column" md={12}>
            <Grid item container>
              <Grid item sm={3} xs={5}>
                <div className={classes.imgDiv}>
                  <img className={classes.img} src={img} alt="" />
                </div>
              </Grid>
              <Grid item container sm={9} xs={7}>
                <Grid item sm={4} xs={12} className={classes.centerText}>
                  <Typography variant="body1">Product Name</Typography>
                  <Typography variant="body1">Rs, 7585</Typography>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.centerText}>
                  <Typography>Quanity</Typography>
                  <div>
                    <span className="minus">-</span> <span className={classes.itemCount}>1</span>{" "}
                    <span className="add">+</span>
                  </div>
                </Grid>
                <Grid item sm={4} xs={12} className={classes.centerText}>
                  <Typography>Price</Typography>
                  <Typography>Rs. 373</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
