import React from "react"
import { useNavigate } from "react-router-dom"
import { Paper, makeStyles, Button, ListSubheader, ListItem, ListItemText } from "@material-ui/core"
import { useSelector } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2),
    height: '100%'
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
  const navigate = useNavigate()
  const user = useSelector((state) => state.account.user)
  const isAuthenticaded = !!user

  return (
    <Paper className={classes.root}>
      {!isAuthenticaded && (
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => { navigate('/sign-up') }}
        >Registrar grátis
        </Button>
      )}
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
