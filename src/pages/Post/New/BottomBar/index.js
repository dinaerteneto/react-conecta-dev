import React from "react"
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(2)
  }
}))

function BottomBar() {
  const classes = useStyles()

  const handlePublish = () => { }
  const handleSaveDraft = () => { }

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button} onClick={handleSaveDraft}>Salvar rascunho</Button>
        <Button color="secondary" variant="outlined" onClick={handlePublish}>Publicar</Button>
      </Toolbar>
    </AppBar>
  )
}

export default BottomBar