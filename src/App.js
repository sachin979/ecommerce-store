import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { createTheme } from "@material-ui/core";
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
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div>test</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
