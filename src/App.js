import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import './mock'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<div>404</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
