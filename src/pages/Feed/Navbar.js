import React from "react"
import { Paper, makeStyles, Button, ListSubheader, ListItem, ListItemText } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}))

const tags = [
    { id: 1, name: 'Tecnologia' },
    { id: 2, name: 'Moda' },
    { id: 3, name: 'Esportes' },
    { id: 4, name: 'Entretenimento' },
    { id: 5, name: 'Ciência' },
    { id: 6, name: 'Saúde' },
    { id: 7, name: 'Economia' },
    { id: 8, name: 'Tudo' }
]

function Navbar() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar grátis</Button>
            <ListSubheader>
                {
                    tags.map(tag => (
                        <ListItem dense button key={`item-${tag.id}-${tag.name}`}>
                            <ListItemText primary={`#${tag.name}`}></ListItemText>
                        </ListItem>
                    ))
                }
                <ListItem button>
                    Exibir mais Tags
                </ListItem>
            </ListSubheader>
        </Paper>
    )
}

export default Navbar
