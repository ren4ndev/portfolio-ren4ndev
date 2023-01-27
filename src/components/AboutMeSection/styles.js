import styled from 'styled-components';

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: col-7 / col-12;
  grid-row: start / end;
  justify-content: center;
  height: 100%;
  transition: all .4s ease;
  width: 100%;
`;

const SubtitleArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  margin: 0 0 25px 0;
  transition: all .4s ease;
`;

const DescriptionTextArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  max-width: 600px;
  transition: all .4s ease;

  > p {
    margin-bottom: 15px;
  }
`;

const ImageContainer = styled.div`
  align-self: center;
  grid-column: col-2 / col-6;
  grid-row: start / end;
  height: 320px;
  justify-self: flex-end;
  width: 320px;
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
