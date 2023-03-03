import React, { useState } from 'react';
import PropTypes from 'prop-types';
import content from '../../locales/en.json';
import logo from '../../assets/images/logo.png';
import Typography from '../Typography';
import ThemeButton from '../ThemeButton';
import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavList,
  NavListItem,
  Image,
  Link,
  MenuIcon,
  SideMenu,
  SideNavList,
  CloseIcon,
} from './styles';

function Header({
  theme,
  themeToggler,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <Logo>
        <Image src={logo} />
      </Logo>
      <NavContainer>
        <NavList>
          {content.header.menuItems.map(({ number, title, link }) => (
            <Link href={link}>
              <NavListItem key={title}>
                <Typography type="body-02" color="tertiary">{number}</Typography>
                <Typography type="body-02" color="textscale-04">{title}</Typography>
              </NavListItem>
            </Link>
          ))}
        </NavList>
        <ThemeButton theme={theme} themeToggler={themeToggler} />
      </NavContainer>
      <MenuIcon onClick={() => setMenuOpen(true)} />
      <SideMenu menuOpen={menuOpen}>
        <CloseIcon onClick={() => setMenuOpen(false)} />
        <SideNavList>
          {content.header.menuItems.map(({ number, title, link }) => (
            <Link href={link}>
              <NavListItem key={title}>
                <Typography type="body-02" color="tertiary">{number}</Typography>
                <Typography type="body-02" color="textscale-06">{title}</Typography>
              </NavListItem>
            </Link>
          ))}
        </SideNavList>
        <ThemeButton theme={theme} themeToggler={themeToggler} />
      </SideMenu>
    </HeaderContainer>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggler: PropTypes.func.isRequired,
};

export default Header;
