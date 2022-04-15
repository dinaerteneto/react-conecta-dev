import React from "react"
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button"
import { useNavigate } from "react-router-dom";

function WritePost() {
    const user = useSelector(state => state.account.user);
    const isAuthenticated = !!user
    const navigate = useNavigate()

    const toNewPost = () => {
        if (isAuthenticated) {
            navigate('/post/new')
        } else {
            navigate('/sign-in')
        }
    }

    return (
        <Button color="primary" variant="contained" onClick={toNewPost}>
            Novo post
        </Button>
    );
}

export default WritePost