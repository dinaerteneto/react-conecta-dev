import React from "react"
import { useSelector } from "react-redux";
import { Box, makeStyles, Typography, Avatar, Divider } from "@material-ui/core";
import Markdown from 'react-markdown'
import { usePost } from "../../../../context/PostContext";

const useStyles = makeStyles((theme) => ({
    Preview: {
        height: '100%'
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}))

function PostPreview() {
    const user = useSelector(state => state.account.user)
    const classes = useStyles()
    const ctx = usePost()
    const {
        title,
        image,
        tags,
        markdownText
    } = ctx
    return (
        <>
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
        </>
    )
}

export default PostPreview