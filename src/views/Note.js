import React from 'react';
import SideBar from 'components/organisms/SideBar/SideBar';
import Card from 'components/molecules/Card/Card';

const Note = () => (
  <div>
    <SideBar type="note" />
    <h1>Notes</h1>
    <Card />
  </div>
);

export default Note;
