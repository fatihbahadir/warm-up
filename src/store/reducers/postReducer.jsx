const initialState = {
  posts: [],
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default postReducer;