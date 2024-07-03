const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_POSTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_USER_POSTS_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FETCH_USER_POSTS_FAILURE':
      return { ...state, loading: false, error: action.error };

    case 'ADD_USER_POST_REQUEST':
      return { ...state, loading: true };
    case 'ADD_USER_POST_SUCCESS':
      return { ...state, posts: [...state.posts, action.payload], loading: false };
    case 'ADD_USER_POST_FAILURE':
      return { ...state, loading: false, error: action.error };

    case 'DELETE_USER_POST_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_USER_POST_SUCCESS':
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload), loading: false };
    case 'DELETE_USER_POST_FAILURE':
      return { ...state, loading: false, error: action.error };

    case 'UPDATE_USER_POST_REQUEST':
      return { ...state, loading: true };
    case 'UPDATE_USER_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
      };
    case 'UPDATE_USER_POST_FAILURE':
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default postReducer;