import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import ThemeButton from '../ThemeButton';
import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavList,
  NavListItem,
} from './styles';

function Header({
  theme,
  themeToggler,
}) {
  return (
    <HeaderContainer>
      <Logo>
        <Typography type="body-01" color="tertiary">ren4ndev</Typography>
      </Logo>
      <NavContainer>
        <NavList>
          <NavListItem>
            <Typography type="body-02" color="tertiary">01. </Typography>
            <Typography type="body-02" color="textscale-04">About</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="tertiary">02. </Typography>
            <Typography type="body-02" color="textscale-04">Experience</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="tertiary">03. </Typography>
            <Typography type="body-02" color="textscale-04">Work</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="tertiary">04. </Typography>
            <Typography type="body-02" color="textscale-04">Contact</Typography>
          </NavListItem>
        </NavList>
        <ThemeButton theme={theme} themeToggler={themeToggler} />
      </NavContainer>
    </HeaderContainer>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Header;
