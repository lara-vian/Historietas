
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import THEME from "./src/theme/"
import Home from './src/screens/home';
import Login from "./src/screens/login"

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
  );
}


