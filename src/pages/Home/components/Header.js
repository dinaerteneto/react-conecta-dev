import React from "react";
import { Button } from '@material-ui/core'
import { AppBar, Toolbar, makeStyles, SvgIcon, Avatar } from "@material-ui/core"
import { Bell } from "react-feather"

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
                    <Avatar alt="Remy Sharp" src="" />
                </div>
                {/* <span><a href="/">Conecta Dev</a></span>
                <div>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header