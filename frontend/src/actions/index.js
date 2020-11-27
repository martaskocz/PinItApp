import axios from 'axios';
import Cookie from 'js-cookie';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const removeItem = (itemType, id) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => (dispatch) => {
  const getId = () => `${Math.random().toString(36).substr(2, 9)}`;
  dispatch({
    type: ADD_ITEM_REQUEST
  });

  return axios.post('http://localhost:9000/api/note', {
    type: itemType,
    userID: Cookie.get('userID'),
    ...itemContent
  })
    .then(payload => {
      console.log(payload);
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          item: {
            _id: getId(),
            ...itemContent,
            created: '15 days'
          },
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({type: ADD_ITEM_FAILURE, error})
    })
};

export const authenticate = (username, password) => dispatch => {
  dispatch({
    type: AUTH_REQUEST,
  });

  return axios.post('http://localhost:9000/api/user/login', {
    username, password
  })
    .then(payload => {
      dispatch({type: AUTH_SUCCESS, payload})
    })
    .catch(err => {
      console.log(err);
      dispatch({type: AUTH_FAILURE, err})
    })
};

export const registerUser = (username, password) => dispatch => {
  dispatch({
    type: ADD_USER_REQUEST
  });

  axios.post('http://localhost:9000/api/user/register', {
    username, password
  })
    .then(payload => {
      console.log(payload);
      dispatch({ type: ADD_USER_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err);
      dispatch({type: ADD_USER_FAILURE, err})
    })
};

export const fetchItems = (itemType) => (dispatch) => {
  dispatch({
    type: FETCH_REQUEST
  });

  return axios.get('http://localhost:9000/api/notes/type', {
    params: {
      userID: Cookie.get('userID'),
      type: itemType
    }
  })
    .then(({data}) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType
        }
      })
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_FAILURE})
    })
};
