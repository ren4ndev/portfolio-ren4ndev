import styled from 'styled-components';
import { MoonStarsFill, SunFill } from '@styled-icons/bootstrap';

const ThemeTogglerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.tertiary}`};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mono};
  justify-content: space-between;
  min-width: 172px;
  padding: 8px 16px;
  transition: all .4s ease;
`;

const ToggleIconMoon = styled(MoonStarsFill)`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-left: 20px;
  width: 20px;
`;

const ToggleIconSun = styled(SunFill)`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-left: 20px;
  width: 20px;
`;

export {
  ThemeTogglerButton,
  ToggleIconMoon,
  ToggleIconSun,
};
