import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyle';
import { themeLight, themeDark } from './styles/theme';

function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => (
    theme === 'light' ? setTheme('dark') : setTheme('light')
  );

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Home theme={theme} themeToggler={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
