import React from "react"
import { Box, Container, makeStyles } from "@material-ui/core"

import PostCard from "../../components/PostCard"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const posts = [
    {
        id: 1,
        image: '/images/posts/post1.png',
        title: 'Comparativo entre React.js e Vue.js',
        date: 'April 1, 2020',
        description: 'Quero criar um bootcamp gratuito para passar o tempo com React.js e Vue.js. Eu gostaria de saber se o curso é ou não gratuito.',
        hashtags: ['react', 'vue', 'bootcamp'],
        author: {
            id: 1,
            name: 'João Paulo',
            username: 'joao.paulo',
            avatar: '/images/avatar/avatar_1.jpeg'
        }
    },
    {
        id: 2,
        image: '/images/posts/post2.png',
        title: 'Truques',
        date: 'April 1, 2020',
        description: 'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques',
        hashtags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
        author: {
            id: 1,
            name: 'João Paulo',
            username: 'joao.paulo',
            avatar: '/images/avatar/avatar_1.jpeg'
        }
    },
]

function Feed() {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <Navbar />
                <div className={classes.root}>
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
                )
            </Box>
        </Container>
    )
}

export default Feed
