import React from "react";
import Navbar from "../components/ui/header";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./ui/Theme";

function App() {
  return (
        <ThemeProvider theme={theme}>
            <Navbar/>
        </ThemeProvider>
  );
}
export default App;
