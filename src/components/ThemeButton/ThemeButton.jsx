import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeTogglerButton, ToggleIconMoon, ToggleIconSun,
} from './styles';
import Typography from '../Typography';

function ThemeToggler({
  theme,
  themeToggler,
}) {
  return (
    <ThemeTogglerButton onClick={themeToggler}>
      <Typography type="body-02" color="tertiary">
        {`${theme === 'light' ? 'Dark' : 'Light'} mode`}
      </Typography>
      {theme === 'light' ? <ToggleIconMoon /> : <ToggleIconSun />}
    </ThemeTogglerButton>
  );
}

ThemeToggler.propTypes = {
  theme: PropTypes.bool.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default ThemeToggler;
