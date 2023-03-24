import styled from 'styled-components';
import { List, X } from '@styled-icons/bootstrap';
import { breakpoints } from '../../styles/theme';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  transition: all .4s ease;

  @media screen and (min-width: ${breakpoints.small}) {
    padding: 1.5rem 2rem;
  }
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    padding: 1.5rem 3rem;
  }
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-weight: 400;
`;

const Image = styled.img`
  height: 35px;
  width: 35px;

  @media screen and (min-width: ${breakpoints.xmedium}) {
    height: 45px;
    width: 45px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    height: 70px;
    width: 70px;
  }
`;

const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 30px;
  padding: 0;
`;

const NavListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  list-style: none;
  margin: 30px 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin: 0 30px 0 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const MenuIcon = styled(List)`
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  width: 40px;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const CloseIcon = styled(X)`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  margin-right: 28px;
  margin-top: 16px;
  width: 40px;
`;

const SideMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -12px 10px 31px -15px #0A192F;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 20px 20px 30px;
  position: fixed;
  right: -320px;
  top: 0;
  transition: all .4s ease;
  transform: ${({ menuOpen }) => {
    if (menuOpen) return 'translateX(-320px)';
    return 'translateX(0)';
  }};
  width: 320px;
  z-index: 2;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const SideNavList = styled(NavList)`
  flex-direction: column;
  flex-grow: 1;
`;

export {
  HeaderContainer,
  Logo,
  NavContainer,
  NavList,
  NavListItem,
  Image,
  Link,
  MenuIcon,
  CloseIcon,
  SideMenu,
  SideNavList,
};
