import axios from '../utils/axios'
import { useSelector } from 'react-redux'
import isEmpty from '../utils/isEmpty'
class AuthService {
    signIn = async (username, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', { username, password })
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error.response.data)
                })
        })
    }

    setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    getUser = () => {
        const user = useSelector(state => state.user)
        return user && isEmpty(user) ? user : null
    }

    isAuthenticated = () => !!this.getUser()
}

const authService = new AuthService()

export default authService