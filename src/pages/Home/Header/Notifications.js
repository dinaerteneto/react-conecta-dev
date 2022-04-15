import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SvgIcon, IconButton, Popover, Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core"
import { getNotifications } from "../../../actions/notificationsActions";
import { makeStyles } from "@material-ui/styles";
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageCircleIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
} from "react-feather"

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageCircleIcon,
    like: HeartIcon,
    connection: ConnectionIcon
}

const useStyles = makeStyles(theme => ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}))

function Notifications() {
    const ref = useRef(null);
    const classes = useStyles();

    const user = useSelector(state => state.account.user);
    const notifications = useSelector(state => state.notifications.notifications);
    const isAutenthicated = !!user

    const dispatch = useDispatch()

    const [isOpen, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch])


    return (
        isAutenthicated && (
            <>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover
                    onClose={handleClose}
                    open={isOpen}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary">
                            Notificações
                        </Typography>
                        <List>
                            {notifications.map(notification => {
                                const Icon = iconsMap[notification.type]
                                return (<ListItem key={notification.id}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.icon}>
                                            <SvgIcon>
                                                <Icon />
                                            </SvgIcon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={notification.title}
                                        primaryTypographyProps={{
                                            variant: 'subtitle2',
                                            color: 'textPrimary'
                                        }}
                                        secondary={notification.description}
                                    />
                                </ListItem>)
                            })}
                        </List>
                    </Box>
                </Popover>
            </>
        )
    )
}

export default Notifications