const initialState = {
  twitters: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitterName: 'dan_abramov',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitterName: 'kentcdodds',
      created: '3 days',
    },
    {
      id: 3,
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitterName: 'ryanflorence',
      created: '12 days',
    },
    {
      id: 4,
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitterName: 'mjackson',
      created: '13 days',
    },
    {
      id: 5,
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      twitterName: 'cassidoo',
      created: '15 days',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created: '3 days',
    },
    {
      id: 3,
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created: '12 days',
    },
    {
      id: 4,
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created: '13 days',
    },
    {
      id: 5,
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      created: '15 days',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React on my mind',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Live React',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '3 days',
    },
    {
      id: 3,
      title: 'You do not know JS',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '12 days',
    },
    {
      id: 4,
      title: 'Cool vibes',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '13 days',
    },
    {
      id: 5,
      title: 'Winter is coming',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      articleUrl: 'https://youtube.com',
      created: '15 days',
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  if (type === 'REMOVE_ITEM') {
    return {
      ...state, // zwracamy caly stan przed wykonaniem akcji
      [payload.itemType]: state[payload.itemType].filter((item) => item.id !== payload.id),
    };
  }
  return state;
};

export default reducer;
