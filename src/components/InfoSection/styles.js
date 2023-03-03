import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: start / end;
  grid-row: start / end;
  justify-content: center;
  height: 100%;
  transition: all .4s ease;
  width: 100%;

  @media screen and (min-width: ${breakpoints.xmedium}) {
    grid-column: start / col-4;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    grid-column: col-2 / col-10;
  }
`;

const MonoTextArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  margin: 0 0 15px 4px;
  transition: all .4s ease;
`;

const DisplayTextArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-bottom: 15px;
  transition: all .4s ease;
`;

const DescriptionTextArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  max-width: 600px;
  transition: all .4s ease;
`;

export {
  InfoContainer,
  MonoTextArea,
  DisplayTextArea,
  DescriptionTextArea,
};
