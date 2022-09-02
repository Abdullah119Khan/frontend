import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constant/constant'

const posts = (posts = [], action) => {
  switch(action.type) {
    case LIKE_POST:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload)
    case UPDATE_POST:
      return posts.map((post) => post._id === action.payload._id ? action.payload: post)
    case CREATE_POST:
      return [...posts, action.payload]
    case GET_POST:
      return action.payload;
    default:
      return posts;
  }
}

export default posts;