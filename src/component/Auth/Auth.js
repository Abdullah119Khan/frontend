import React, { useState } from 'react'
import { Avatar, Container, Paper, Typography, Grid, Button } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { GoogleLogin } from 'react-google-login'

import styleList from './style'
import Input from './Input'

const initialData = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const classes = styleList()
  const [isSignUp, setIsSignUp] = useState(true)
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleShowPassword = () => setShowPassword(show => !show)

  const switchClick = () => setIsSignUp(set => !set)

  return (
    <Container maxWidth="xs" component="main">
     <Paper className={classes.paper} elevation={6}>
      <div className={classes.avatar}>
       <Avatar>
        <LockOutlined color="error"/>
       </Avatar>
       <Typography>Sign In</Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
       <Grid container spacing={2}>
       { isSignUp && (
        <>
         <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
         <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
        </>
       )}
       <Input name="email" label="Email" fullWidth handleChange={handleChange}/>
       <Input name="password" label="password" handleChange={handleChange} type={ showPassword ? 'text': 'password'} handleShowPassword={handleShowPassword}/>
       {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}/>}
       </Grid>
       <Button className={classes.login} variant="contained" color="primary" fullWidth>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
       <GoogleLogin
       clientId='abmalakkhan'
       render={(render) => (
        <Button variant="contained" color="secondary" onClick={render.onClick} fullWidth>Google Login</Button>
       )}
       />
       <Grid container justifyContent='flex-end'>
        <Grid item>
         <Button onClick={switchClick}>
         { isSignUp ? 'Have an account Sign In': "Don't have an account Sign Up"}
         </Button>
        </Grid>
       </Grid>
      </form>
     </Paper>
    </Container>
  )
}

export default Auth