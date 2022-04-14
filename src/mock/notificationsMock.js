import mock from '../utils/mock'
import moment from 'moment'

const notifications = [
    {
        id: 1,
        title: 'Novo usuário cadastrado',
        description: 'Um novo usuário se cadastrou na plataforma',
        createdAt: moment().subtract(2, 'days').format('DD/MM/YYYY'),
        type: 'reviews'
    },
    {
        id: 2,
        title: 'Novos comentários recebidos',
        description: 'Você recebeu novos comentários na sua postagem',
        createdAt: moment().subtract(1, 'days').format('DD/MM/YYYY'),
        type: 'new_comment'
    },
    {
        id: 3,
        title: 'Novos likes recebidos',
        description: 'Você recebeu novos likes na sua postagem',
        createdAt: moment().subtract(1, 'days').format('DD/MM/YYYY'),
        type: 'like'
    },
    {
        id: 4,
        title: 'Novos seguidores',
        description: 'Você tem novos seguidores',
        createdAt: moment().subtract(1, 'days').format('DD/MM/YYYY'),
        type: 'connection'
    }
]

mock.onGet('/api/notifications').reply(200, { notifications })