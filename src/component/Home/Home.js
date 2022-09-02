import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import { useDispatch } from 'react-redux'
import { getPost } from '../../action/posts'

import styleList from './style'

const Home = () => {
  const classes = styleList();
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost())
  }, [currentId, dispatch])

  return (
    <Container className={classes.container}>
     <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={7}>
       <Posts setCurrentId={setCurrentId}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
       <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </Grid>
     </Grid>
    </Container>
  )
}

export default Home