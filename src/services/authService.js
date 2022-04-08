import axios from '../utils/axios'

class AuthService {
    async signIn(username, password) {
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
}

const authService = new AuthService()

export default authService