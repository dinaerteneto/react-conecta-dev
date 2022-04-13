import axios from '../utils/axios'
class AuthService {
    signIn = (username, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/home/login', { username, password })
                .then(response => {
                    if (response.data.user) {
                        this.setToken('jwt')
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

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios
                .post('/api/home/me')
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data.user)
                    } else {
                        reject(response.data.error)
                    }
                })
                .catch(error => {
                    reject(error.response.data)
                })
        })
    }


    setToken = (token) => {
        localStorage.setItem('accessToken', token)
    }

    getToken = () => localStorage.getItem('accessToken')

    isAuthenticated = () => !!this.getToken()

    removeToken = () => localStorage.removeItem('accessToken')

    signOut = () => {
        this.removeToken()
    }

}

const authService = new AuthService()

export default authService