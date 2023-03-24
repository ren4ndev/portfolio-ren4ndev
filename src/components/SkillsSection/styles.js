import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const SkillsContainer = styled.div`
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  justify-items: center;
  grid-column: start / end;
  grid-row: start / end;
  transition: all .4s ease;
  width: 100%;

  @media screen and (min-width: ${breakpoints.xlarge}) {
    grid-column: col-2 / col-12;
  }
`;

const GridContainer = styled.div`
  background: ${({ theme }) => theme.colors['background-scale-01']};
  background: ${({ theme }) => `linear-gradient(90deg, ${theme.colors['background-scale-01']} 0%, ${theme.colors['background-scale-04']} 100%)`};
  display: flex;
  flex-direction: column;
  grid-column: left-border / right-border;
  grid-row: top-border / bottom-border;
  justify-content: space-between;
  transition: all .4s ease;
`;

const ColoredBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 160px;
  width: 100%;
  transition: all .4s ease;
`;

const TopColoredBox = styled(ColoredBox)`
  align-self: flex-start;
`;

const BottomColoredBox = styled(ColoredBox)`
  align-self: flex-end;
`;

export {
  SkillsContainer,
  GridContainer,
  TopColoredBox,
  BottomColoredBox,
};
