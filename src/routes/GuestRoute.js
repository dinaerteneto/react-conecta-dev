import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

function GuestRoute({ element: Component, ...rest }) {
    console.log('rest', { rest })
    console.log('component', Component)
    const user = useSelector(state => state.account.user)
    console.log('user AAA', user)
    const isAuthenticated = Boolean(user)
    return isAuthenticated ? Component : <Navigate to="/sign-in" />
}

export default GuestRoute