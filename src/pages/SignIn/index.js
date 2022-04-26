import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Avatar, Box, Grid, TextField, Typography, Button, Link, FormHelperText } from '@material-ui/core'

import { signIn } from '../../actions/accountActions';
import { Formik } from 'formik';
import * as Yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  form: {
    margin: theme.spacing(2, 4)
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1)
  }
}))

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Dinaerte Neto {new Date().getFullYear()}
    </Typography>
  )
}

function SignIn() {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Grid container className={classes.root}>
      <Grid item container md={7}
        direction="column" justifyContent="center" alignItems="center"
        className={classes.image}>
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
          <strong>Simplificando a forma de conectar desenvolvedores</strong>
        </Typography>
        <Typography variant="body2" style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" m={8}>
          <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
          <Typography variant="h5">
            Acesso
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Informe um e-mail válido').required('Email é obrigatório'),
              password: Yup.string().required('Senha é obrigatória')
            })}
            onSubmit={async (values, {
              setErrors,
              setStatus,
              setSubmitting
            }) => {
              try {
                await dispatch(signIn(values.email, values.password))
                navigate('/')
              } catch (error) {
                const message = (error.response && error.response.data && error.response.data.message) || 'Ocorreu um erro'
                setErrors({ submit: message })
                setStatus({ success: false })
                setSubmitting(false)
              }
            }}
          >
            {
              ({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
                <form noValidate className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    helperText={errors.email}
                    error={Boolean(errors.email)}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                  {
                    errors.submit &&
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  }
                  <Grid container>
                    <Grid item>
                      <Link>Esqueceu sua senha?</Link>
                    </Grid>
                    <Grid item>
                      <Link onClick={() => { navigate('/sign-up') }}>Cadastre-se</Link>
                    </Grid>
                  </Grid>
                </form>
              )
            }
          </Formik>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignIn