import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardSection from 'templates/CardSection';

const Note = () => {
  const note = 'note';

  return (
    <>
      <CardSection type={note}>
        <Card type={note} />
        <Card type={note} />
        <Card type={note} />
        <Card type={note} />
        <Card type={note} />
        <Card type={note} />
      </CardSection>
    </>
  );
};
export default Note;
