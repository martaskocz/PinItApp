import { ADD_ITEM, REMOVE_ITEM, AUTH_SUCCESS, FETCH_SUCCESS, AUTH_FAILURE } from '../actions';

const initialState = {
  twitters: [
    {
      _id: "1",
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      twitterName: 'dan_abramov',
      created: '1 day',
    },
    {
      _id: "2",
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      twitterName: 'kentcdodds',
      created: '3 days',
    },
    {
      _id: "3",
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      twitterName: 'ryanflorence',
      created: '12 days',
    },
    {
      _id: "4",
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      twitterName: 'mjackson',
      created: '13 days',
    },
    {
      _id: "5",
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      twitterName: 'cassidoo',
      created: '15 days',
    },
  ],
  notes: [
    {
      _id: "1",
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      created: '1 day',
    },
    {
      _id: "2",
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      created: '3 days',
    },
    {
      _id: "3",
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      created: '12 days',
    },
    {
      _id: "4",
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      created: '13 days',
    },
    {
      _id: "5",
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      created: '15 days',
    },
  ],
  articles: [
    {
      _id: "1",
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '1 day',
    },
    {
      _id: "2",
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '3 days',
    },
    {
      _id: "3",
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '12 days',
    },
    {
      _id: "4",
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '13 days',
    },
    {
      _id: "5",
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua.',
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
        userID: payload.data._id
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
    case ADD_ITEM:
      return {
        ...state,
        [payload.itemType]: [...state[payload.itemType], payload.item],
      };
    default:
      return state;
  }
};

export default reducer;
