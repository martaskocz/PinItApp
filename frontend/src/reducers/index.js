import {
  AUTH_SUCCESS,
  AUTH_FAILURE,
  ADD_USER_SUCCESS,
  FETCH_SUCCESS,
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM,
  LOGOUT_USER
} from '../actions';
import Cookies from 'js-cookie';

const initialState = {
  twitters: [],
  notes: [
    {
      _id: "1",
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      created: '1 day',
    },
    {
      _id: "2",
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      created: '3 days',
    },
    {
      _id: "3",
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      created: '12 days',
    },
    {
      _id: "4",
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      created: '13 days',
    },
    {
      _id: "5",
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      created: '15 days',
    },
  ],
  articles: [
    {
      _id: "1",
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '1 day',
    },
    {
      _id: "2",
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '3 days',
    },
    {
      _id: "3",
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '12 days',
    },
    {
      _id: "4",
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '13 days',
    },
    {
      _id: "5",
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '15 days',
    },
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
