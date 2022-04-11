import authService from "../services/authService"

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS'

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

export default signIn