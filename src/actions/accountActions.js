import authService from "../services/authService"

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS'
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN'
export const SIGNOUT = '@ACCOUNT/SIGNOUT'
export const SIGNUP = '@ACCOUNT/SIGNUP'

const signUp = (fullname, email, password) => {
  return async (dispatch) => {
    const user = await authService.signUp(fullname, email, password)
    dispatch({
      type: SIGNUP,
      payload: {
        user
      }
    })

  }
}

const signIn = (email, password) => {
  return async (dispatch) => {
    const user = await authService.signIn(email, password)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user
      }
    })

  }
}

const setUserData = () => {
  return async (dispatch) => {
    const user = await authService.signInWithToken()
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user
      }
    })

  }
}

const signOut = () => {
  return async (dispatch) => {
    await authService.signOut()
    dispatch({
      type: SIGNOUT
    })
  }
}

export { signUp, signIn, setUserData, signOut }