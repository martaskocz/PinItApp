import React from 'react';
// import './App.css';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Card from 'components/molecules/Card/Card';
import GlobalStyle from 'components/theme/GlobalStyle';
import article from 'assets/icons/article.svg';

const Main = () => (
  <div>
    <GlobalStyle />
    <h1>Hello!</h1>
    <Button label="Close / Save" />
    <Button label="Remove" secondary />
    <ButtonIcon icon={article} active />
    <Card type="twitter" />
    <Card type="note" />
    <Card type="article" />
  </div>
);

export default Main;
