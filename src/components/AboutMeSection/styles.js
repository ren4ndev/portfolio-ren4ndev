import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: start / end;
  grid-row: middle / end;
  justify-content: center;
  height: 100%;
  transition: all .4s ease;
  width: 100%;
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    grid-column: col-3 / end;
    grid-row: start / end;
  }
  
  @media screen and (min-width: ${breakpoints.medium}) {
    grid-column: col-7 / col-12;
  }
`;

const SubtitleArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  margin: 0 0 25px 0;
  transition: all .4s ease;
`;

const DescriptionTextArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  max-width: 800px;
  transition: all .4s ease;

  > p {
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  align-self: center;
  grid-column: start / end;
  grid-row: start / middle;
  height: 250px;
  justify-self: center;
  margin: 1.5rem 0;
  width: 250px;
  
  @media screen and (min-width: ${breakpoints.small}) {
    height: 280px;
    width: 280px;
  }
  
  @media screen and (min-width: ${breakpoints.xmedium}) {
    grid-column: start / col-3;
    grid-row: start / end;
  }
  
  @media screen and (min-width: ${breakpoints.medium}) {
    grid-column: col-2 / col-6;
    height: 320px;
    justify-self: flex-end;
    width: 320px;
    justify-self: flex-end;
  }
`;

const ImageArea = styled.img`
  border: ${({ theme }) => `5px solid ${theme.colors.tertiary}`};
  border-radius: 0 50% 0 50%;
  box-shadow: -12px 10px 31px -15px #0A192F;
  width: 100%;
`;

const ImageFilter = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 0 50% 0 50%;
  height: 100%;
  left: 0;
  opacity: 35%;
  position: relative;
  top: 0;
  translate: 0 -253px;
  width: 100%;
  z-index: 1;
`;

export {
  AboutMeContainer,
  SubtitleArea,
  DescriptionTextArea,
  ImageContainer,
  ImageArea,
  ImageFilter,
};
