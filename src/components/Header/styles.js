import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  transition: all .4s ease;
`;

const Logo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-weight: 400;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  margin: 30px;
  padding: 0;
`;

const NavListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.mono};
  list-style: none;
  margin-right: 30px;
`;

export {
  HeaderContainer,
  Logo,
  NavContainer,
  NavList,
  NavListItem,
  Image,
};
