import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';

const notes = [
  {
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created: '1 day',
  },
  {
    title: 'Live React',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created: '3 days',
  },
  {
    title: 'You do not know JS',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created: '12 days',
  },
  {
    title: 'Cool vibes',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created: '13 days',
  },
  {
    title: 'Winter is coming',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    created: '15 days',
  },
];

const Note = () => {
  const note = 'note';

  return (
    <CardSection type={note}>
      {notes.map((item) => (
        <Card type="note" title={item.title} content={item.content} created={item.created} />
      ))}
    </CardSection>
  );
};
export default Note;
