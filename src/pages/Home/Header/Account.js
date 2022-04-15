import React, { useState, useRef } from "react"
import Avatar from "@material-ui/core/Avatar"
import { Menu, MenuItem } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "../../../actions/accountActions"
import { useNavigate } from "react-router-dom"

function Account() {
    const user = useSelector(state => state.account.user)
    const isAuthenticated = !!user

    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ref = useRef()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const handleSignOut = () => {
        handleClose()
        dispatch(signOut())
        navigate('/sign-in')
    }

    return (
        <>
            <Avatar
                ref={ref}
                alt="{user.name}"
                src={user && user.avatar}
                onClick={handleOpen}
            />
            {
                isAuthenticated
                    ?
                    <Menu
                        anchorEl={ref.current}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        open={isOpen}
                        getContentAnchorEl={null}
                        onClose={handleClose}
                    >
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Meus favoritos</MenuItem>
                        <MenuItem>Meus posts</MenuItem>
                        <MenuItem>Minhas conexões</MenuItem>
                        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                    </Menu>
                    :
                    <Menu
                        anchorEl={ref.current}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                        }}
                        open={isOpen}
                        getContentAnchorEl={null}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate('/sign-in')}>Registrar-se grátis</MenuItem>
                        <MenuItem onClick={() => navigate('/sign-in')}>Entrar</MenuItem>
                    </Menu>
            }
        </>
    )
}

export default Account