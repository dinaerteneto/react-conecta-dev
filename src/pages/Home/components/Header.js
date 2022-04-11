import React from "react";
import { Button } from '@material-ui/core'
import { AppBar, Toolbar, makeStyles, SvgIcon, Avatar } from "@material-ui/core"
import { Bell } from "react-feather"
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})

function Header() {
    const classes = useStyles();
    const { user } = useSelector(state => state.account.user)

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow} />
                <div className={classes.userSection}>
                    <Button className={classes.button} color="primary" variant="contained">
                        Novo post
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell />
                    </SvgIcon>
                    <Avatar alt="{user.name}" src={user && user.avatar} />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header