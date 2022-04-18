import React, { useCallback, useState } from "react"
import { useSelector } from "react-redux";
import { AppBar, Box, Button, makeStyles, Toolbar, TextField, Typography, Divider, Avatar } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDropzone } from "react-dropzone"
import Markdown from 'react-markdown'

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

const aTags = [
    { title: 'React' },
    { title: 'Vue' },
    { title: 'Angular' },
    { title: 'Node' },
    { title: 'Express' },
    { title: 'MongoDB' },
]

function NewPost() {
    const classes = useStyles()
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [markdownText, setMarkdownText] = useState('')

    const user = useSelector(state => state.account.user)

    const handleTagsChange = (event, values) => {
        setTags(values)
    }

    const handleChangeMarkdown = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    // dropzone
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const base64data = reader.result
            setImage(base64data)
        }
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    })

    return (
        <>
            <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button>Carregar imagem</Button>
                    </div>
                    {image && <img src={image} alt="imagem" className={classes.image} />}
                    <TextField name="title" placeholder="Título" fullWidth value={title} onChange={e => setTitle(e.target.value)} />
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={aTags}
                        value={tags}
                        onChange={(event, newValue) => {
                            handleTagsChange(event, newValue)
                        }}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} variant="standard" placeholder="tags" />}
                    />
                    <textarea onChange={handleChangeMarkdown} className={classes.textArea}></textarea>
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    {image && <img src={image} alt="imagem" className={classes.imagePreview} />}
                    <Typography variant="h2">{title}</Typography>
                    <Box display="flex" alignItems="center">
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
                    <Typography variant="body1">{tags.map(tag => tag.title).join(', ')}</Typography>
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