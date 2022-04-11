import React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Provider } from "react-redux"

import theme from "./theme"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import GuestRoute from "./routes/GuestRoute"
import store from './store'

import './mock'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<div>Not found 404</div>} />
            <Route path="/" element={<GuestRoute element={<Home />} />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
