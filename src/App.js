import React from "react"
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { newTheme } from "./theme"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import PrivateRoute from "./routes/PrivateRoute"

import './mock'
import Auth from "./components/Auth"
import SignUp from "./pages/SignUp"
import { useSettings } from "./context/SettingsContext"

function App() {
  const settings = useSettings()
  return (
    <ThemeProvider theme={newTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/*" element={<PrivateRoute><Home /></PrivateRoute>} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
