import React, { useEffect, useState } from 'react'
import { Button, Paper, TextField, Typography } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { createPost, updatePost } from '../../action/posts'
import { useDispatch, useSelector } from 'react-redux'

import styleList from "./style"

const Form = ({ currentId, setCurrentId }) => {
  const classes = styleList()
  const [postData, setPostData] = useState({title: '', creator: '', message: '', tags: '', selectedFile: ''})
  const posts = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  const dispatch = useDispatch()

  useEffect(() => {
    if(posts) setPostData(posts)
  }, [posts])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clearPost()
  }

  const clearPost = () => {
    setCurrentId(null)
    setPostData({title: '', creator: '', message: '', tags: '', selectedFile: ''})
  }

  return (
    <Paper className={classes.paper}>
     <form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
      <Typography>Create Post</Typography>
      <TextField variant="outlined" label="Title" name="title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} fullWidth/>
      <TextField variant="outlined" label="Creator" name="creator" value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} fullWidth/>
      <TextField variant="outlined" label="Message" name="message" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} fullWidth/>
      <TextField variant="outlined" label="Tags" name="tags" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} fullWidth/>
      <div className={classes.fileBtn}>
       <FileBase
       type="file"
       multiple={false}
       onDone={({ base64 }) => setPostData({...postData, selectedFile: base64 })}
       />
      </div>
       <Button variant="contained" type="submit" className={classes.submitButton} size="medium" color="primary" fullWidth>Submit</Button>
       <Button variant="contained" onClick={clearPost} size="small" color="secondary" fullWidth>Clear</Button>
     </form>
    </Paper>
  )
}

export default Form