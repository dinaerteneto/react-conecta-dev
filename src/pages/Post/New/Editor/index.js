import React, { useCallback } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Button, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useDropzone } from "react-dropzone"
import Title from "./Title";
import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(2)
    },
    image: {
        height: 100
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15
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

function PostEditor() {
    const classes = useStyles()
    const ctx = usePost()
    const {
        image,
        setImage,
        tags,
        setTags,
        markdownText,
        setMarkdownText
    } = ctx

    // dropzone
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const base64data = reader.result
            setImage(base64data)
        }
    }, [setImage])
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*',
    })

    return (
        <>
            <Box {...getRootProps()} mb={2}>
                <input {...getInputProps()} />
                <Button>Carregar imagem</Button>
            </Box>
            {image && (
                <Box mb={1}>
                    <img src={image} alt="imagem" className={classes.image} />
                </Box>
            )}
            <Box mb={2}>
                <Title />
            </Box>
            <Box mb={2}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={aTags}
                    value={tags}
                    onChange={setTags}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} variant="standard" placeholder="tags" />}
                />
            </Box>
            <textarea onChange={setMarkdownText} className={classes.textArea}>{markdownText}</textarea>
        </>
    );
}

export default PostEditor