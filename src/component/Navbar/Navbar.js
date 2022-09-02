import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import styleList from './style'

const Navbar = () => {
  const classes = styleList()

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
     <div>
      <Typography component={Link} to="/" className={classes.logo}>MaLak KhAn</Typography>
     </div>
     <Toolbar className={classes.toolBar}>
      <Button component={Link} to="/auth" variant="contained" size="small" color="primary">Sign In</Button>
     </Toolbar>
    </AppBar>
  )
}

export default Navbar