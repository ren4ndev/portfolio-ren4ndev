import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  grid-column: col-2 / col-12;
  grid-row: start / end;
  justify-content: space-between;
  height: 100%;
  transition: all .4s ease;
  width: 100%;
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
