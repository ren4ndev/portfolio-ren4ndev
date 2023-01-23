import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 3rem;
`;

const Logo = styled.h1`
  height: 65px;
  width: 65px;
  font-family: ${({ theme }) => theme.fonts.logo};
  font-weight: 400;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const NavContainer = styled.nav``;

const NavList = styled.ul`
  display: flex;
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
