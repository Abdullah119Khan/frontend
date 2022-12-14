import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);

  console.log(posts)
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container spacing={3}>
       {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6}>
         <Post post={post} setCurrentId={setCurrentId}/>
        </Grid>
       ))}
      </Grid>
    )
  )
}

export default Posts