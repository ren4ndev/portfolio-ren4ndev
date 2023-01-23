import React from 'react';
import logoImage from '../../assets/images/r4.png';
import Typography from '../Typography';
import {
  HeaderContainer,
  Logo,
  NavContainer,
  NavList,
  NavListItem,
  Image,
} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Image src={logoImage} alt="Logo" />
      </Logo>
      <NavContainer>
        <NavList>
          <NavListItem>
            <Typography type="body-02" color="secondary">01. </Typography>
            <Typography type="body-02" color="grayscale-04">About</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="secondary">02. </Typography>
            <Typography type="body-02" color="grayscale-04">Experience</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="secondary">03. </Typography>
            <Typography type="body-02" color="grayscale-04">Work</Typography>
          </NavListItem>
          <NavListItem>
            <Typography type="body-02" color="secondary">04. </Typography>
            <Typography type="body-02" color="grayscale-04">Contact</Typography>
          </NavListItem>
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
