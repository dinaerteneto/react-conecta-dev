import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import isEmpty from "../utils/isEmpty"

function GuestRoute({ element: Component }) {
    const { user } = useSelector(state => state.account)
    const isAuthenticated = Boolean(user && isEmpty(user))
    return isAuthenticated ? Component : <Navigate to="/sign-in" />
}

export default GuestRoute