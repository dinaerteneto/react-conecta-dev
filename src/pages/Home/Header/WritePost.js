import React from "react"
import Button from "@material-ui/core/Button"
import { useNavigate } from "react-router-dom";

function WritePost() {
    const navigate = useNavigate()
    const toNewPost = () => navigate('/post/new')

    return (
        <Button color="primary" variant="contained" onClick={toNewPost}>
            Novo post
        </Button>
    );
}

export default WritePost