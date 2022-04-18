import React, { useState } from "react"
import { AppBar, Box, Button, makeStyles, Toolbar } from "@material-ui/core";
import PostEditor from "./Editor";
import PostPreview from "./Preview";

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
    }
}))

function NewPost() {
    const classes = useStyles()
    const [tags, setTags] = useState([])
    const [title, setTitle] = useState('')
    const [markdownText, setMarkdownText] = useState('')
    const [image, setImage] = useState(null)


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
                    <PostPreview
                        image={image}
                        title={title}
                        tags={tags}
                        markdownText={markdownText}
                    />
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