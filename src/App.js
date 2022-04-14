import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Card, createTheme, Grid,makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography:{
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif"
    ].join(",")
  },
  palette: {
    primary: {
      main: "#fff",
    },
  },
});
const useStyles=makeStyles((theme)=>({
  prodCard:{
    minHeight:"200px"
  }
}))
var arr=[1,2,3,4,5,6,7,8,9,10];
function App() {
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Grid container spacing={theme.spacing(1)} xs={12} justifyContent="center">
        {arr.map((prod)=>{
          return (
            <Grid key={prod} item xs={4}>
            <Card className={classes.prodCard}> {prod}</Card>
            </Grid>
          )
        })}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
