import { LOGIN_SUCCESS, SILENT_LOGIN } from "../actions/accountActions"

const INITIAL_STATE = { user: null, isAuthenticated: false }

const accountReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
        case SILENT_LOGIN:
            return { ...state, user: action.payload.user }
        default:
            return state
    }

}


export default accountReducer