import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  COMMENT,
  FETCH_BY_CREATOR,
} from "../constants/actionTypes";

// export default (state = { isLoading: true, posts: [] }, action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;
//     case CREATE:
//       return { ...state, posts: [...state.posts, action.payload] };
//     case UPDATE:
//       return {
//         ...state,
//         posts: state.posts.map((post) =>
//           post._id === action.payload._id ? action.payload : post
//         ),
//       };
//     case DELETE:
//       return {
//         ...state,
//         posts: state.posts.filter((post) => post._id !== action.payload),
//       };
//     case LIKE:
//       return {
//         ...state,
//         posts: state.posts.map((post) =>
//           post._id === action.payload._id ? action.payload : post
//         ),
//       };
//     default:
//       return state;
//   }
// };

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};