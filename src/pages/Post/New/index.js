import React, { useState } from "react"
import { useSelector } from "react-redux";
import { AppBar, Box, Button, makeStyles, Toolbar, Typography, Divider, Avatar } from "@material-ui/core";
import Markdown from 'react-markdown'
import PostEditor from "./Editor";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
    button: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 100
    },
    imagePreview: {
        height: '100%'
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}))

function NewPost() {
    const classes = useStyles()
    const [tags, setTags] = useState([])
    const [title, setTitle] = useState('')
    const [markdownText, setMarkdownText] = useState('')
    const [image, setImage] = useState(null)
    const user = useSelector(state => state.account.user)

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleTagsChange = (event, values) => {
        setTags(values)
    }
    const handleChangeMarkdown = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    return (
        <>
            <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
                    <PostEditor
                        image={image}
                        setImage={setImage}
                        title={title}
                        setTitle={handleTitle}
                        tags={tags}
                        setTags={handleTagsChange}
                        markdownText={markdownText}
                        setMarkdownText={handleChangeMarkdown}
                    />
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    {image && (
                        <Box mb={2}>
                            <img src={image} alt="imagem" className={classes.imagePreview} />
                        </Box>
                    )}
                    <Box mb={2}>
                        <Typography variant="h2">{title}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Box>
                            <Avatar
                                alt="{user.name}"
                                className={classes.avatar}
                                src={user && user.avatar}
                            />
                        </Box>
                        <Box>
                            <Typography variant="body1">{user && user.name}</Typography>
                            <Typography variant="body2">@{user && user.username}</Typography>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="body1">{tags.map(tag => tag.title).join(', ')}</Typography>
                    </Box>
                    <Divider />
                    <Markdown children={markdownText} />
                </Box>
            </Box>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Button className={classes.button}>Salvar rascunho</Button>
                    <Button color="secondary" variant="outlined">Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NewPost