import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constant/constant'
import * as API from '../Apis/apis'

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await API.getPost()
    dispatch({ type: GET_POST, payload: data})
  } catch(err) {
    console.log(err)
  }
}

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await API.createPost(postData)
    dispatch({ type: CREATE_POST, payload: data })
  } catch(err) {
    console.log(err)
  }
}

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, postData)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch(err) {
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id)
    dispatch({ type: DELETE_POST, payload: id })
  } catch(err) {
    console.log(err)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id)
    dispatch({ type: LIKE_POST, payload: data })
  } catch(err) {
    console.log(err)
  }
}