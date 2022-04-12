import mock from '../utils/mock'

mock.onPost('api/home/login').reply((config) => {
    const { username, password } = JSON.parse(config.data)

    if (username !== 'teste@teste.com.br' || password !== '123456') {
        return [400, { message: 'Usuário ou senha inválidos' }]
    }
    const user = {
        id: 1,
        name: 'Dinaerte Neto',
        username: 'dinaerteneto',
        email: 'dinaerteneto@gmail.com',
        avatar: '/images/avatar/avatar_1.jpeg',
    }

    return [200, { user }]
})


mock.onPost('api/home/me').reply(200,
    {

        id: 1,
        name: 'Dinaerte Neto',
        username: 'dinaerteneto',
        email: 'dinaerteneto@gmail.com',
        avatar: '/images/avatar/avatar_1.jpeg',

    }
)

