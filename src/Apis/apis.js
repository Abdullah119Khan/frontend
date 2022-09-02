import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api'})

export const getPost = () => API.get('/posts/getAllPost')
export const createPost = (postData) => API.post('/posts/createPost', postData)
export const updatePost = (id, postData) => API.patch(`/posts/update/${id}`, postData)
export const deletePost = (id) => API.delete(`/posts/delete/${id}`, id)
export const likePost = (id) => API.patch(`/posts/${id}/like`)


export const signUp = (formData) => API.post(`/user/signup`, formData)
export const signIn = (formData) => API.post(`/user/signin`, formData)