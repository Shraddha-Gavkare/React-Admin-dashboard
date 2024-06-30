import React, { useContext } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label="Dark Mode"
    />
  );
};

export default ThemeSwitcher;
