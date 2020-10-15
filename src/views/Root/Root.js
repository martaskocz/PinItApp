import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Card from 'components/molecules/Card/Card';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/mainTheme';
import article from 'assets/icons/article.svg';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello!</h1>
        <Button label="Close / Save" />
        <Button label="Remove" secondary />
        <ButtonIcon icon={article} active />
        <Card type="twitter" />
        <Card type="note" />
        <Card type="article" />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
