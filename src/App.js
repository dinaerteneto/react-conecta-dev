import React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Provider } from "react-redux"

import theme from "./theme"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import PrivateRoute from "./routes/PrivateRoute"
import store from './store'

import './mock'
import Auth from "./components/Auth"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
