import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';

const notes = [
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
];

const Notes = () => {
  const note = 'note';

  return (
    <CardSection type={note}>
      {notes.map(({ content, created, id, title }) => (
        <Card id={id} type="note" title={title} content={content} created={created} key={id} />
      ))}
    </CardSection>
  );
};
export default Notes;
