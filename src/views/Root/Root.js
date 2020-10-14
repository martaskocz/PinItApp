import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello!</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <ButtonIcon active>Icon</ButtonIcon>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
