import React from "react"
import { AppBar, Box, Button, makeStyles, Toolbar } from "@material-ui/core";
import PostEditor from "./Editor";
import PostPreview from "./Preview";
import { PostProvider } from "../../../context/PostContext";

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

    return (
        <PostProvider>
            <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
                    <PostEditor />
                </Box>
                <Box width="50%" height="100%" padding={2}>
                    <PostPreview />
                </Box>
            </Box>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Button className={classes.button}>Salvar rascunho</Button>
                    <Button color="secondary" variant="outlined">Publicar</Button>
                </Toolbar>
            </AppBar>
        </PostProvider>
    )
}

export default NewPost