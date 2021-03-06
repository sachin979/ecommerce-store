import React from "react";
import { makeStyles, Card, Typography, Button } from "@material-ui/core";
import { addtocart } from "../actions/Index";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeQuantity } from "../actions/Index";

const useStyles = makeStyles((theme) => ({
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
function ProductCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleCart = (id) => {
    if (cart.includes(id)) {
      let index = cart.indexOf(id);
      dispatch(addQuantity(index));
    } else {
      dispatch(addtocart(id));
      dispatch(addQuantity(cart.length));
    }
  };
  return (
    <Card className={classes.prodCard}>
      <div className={classes.imgDiv}>
        <img className={classes.img} src={props.image} alt="" />
      </div>
      <div className={classes.secRow}>
        <Typography variant="body1" noWrap={true} style={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <div className={classes.pricing}>
          <Typography variant="subtitle1">₹{props.price}</Typography>
          <Typography variant="subtitle1">{props.rate}⭐</Typography>
        </div>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => handleCart(props.id)}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
