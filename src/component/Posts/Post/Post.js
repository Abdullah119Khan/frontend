import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Delete, MoreHoriz, ThumbUp } from '@material-ui/icons'
import React from 'react'
import moment from 'moment'
import { deletePost, likePost } from '../../../action/posts'
import { useDispatch } from 'react-redux'

import styleList from './style'

const Post = ({ post, setCurrentId }) => {
  const classes = styleList()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
     <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
     <div className={classes.overlay}>
      <Typography>{post.creator}</Typography>
      <Typography>{moment(post.createdAt).fromNow()}</Typography>
     </div>
     <div className={classes.overlay2}>
      <Button size="small" style={{ color: '#fff' }} onClick={() => setCurrentId(post._id)}>
       <MoreHoriz />
      </Button>
     </div>
     <div className={classes.details}>
      <Typography color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
     </div>
     <Typography variant="h5" className={classes.title}>{post.title}</Typography>
     <CardContent>
      <Typography color="textSecondary">{post.message}</Typography>
     </CardContent>
     <div className={classes.action}>
      <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
       <ThumbUp />
       &nbsp;
       Like
       &nbsp;
       {post.likeCount}
      </Button>
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
       <Delete />
       &nbsp;
       Delete
       &nbsp;
      </Button>
     </div>
    </Card>
  )
}

export default Post