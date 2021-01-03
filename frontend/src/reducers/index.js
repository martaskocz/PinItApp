import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  ADD_USER_SUCCESS,
  FETCH_SUCCESS,
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM,
  LOGOUT_USER
} from '../actions';

const initialState = {
  twitters: [
    // {
    //   _id: "1",
    //   title: 'Demo twitter no.1',
    //   content:
    //     'Please add your private twitters using new item bar.',
    //   twitterName: 'marta',
    //   created: '1 Jan 2000',
    // }
  ],
  notes: [
    // {
    //   _id: "1",
    //   title: 'Demo Note no.1',
    //   content:
    //     'Please add your private notes using new item bar.',
    //   created: '1 Jan 2000',
    // }
  ],
  articles: [
    // {
    //   _id: "1",
    //   title: 'Demo article no.1',
    //   content:
    //     'Please add your private articles using new item bar.',
    //   articleUrl: 'https://youtube.com',
    //   created: '1 Jan 2000',
    // }
  ],
};

const reducer = (state = initialState, action) => {
  const { payload, err, type } = action;

  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: payload.data._id,
        username: payload.data.username
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        registrationStatus: payload.status
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: err
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...payload.data]
      };
    case REMOVE_ITEM:
      return {
        ...state, // zwracamy caly stan przed wykonaniem akcji
        [payload.itemType]: state[payload.itemType].filter((item) => item._id !== payload._id),
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };
    case LOGOUT_USER:
      return {
        ...state,
        userID: null
      };
    default:
      return state;
  }
};

export default reducer;
