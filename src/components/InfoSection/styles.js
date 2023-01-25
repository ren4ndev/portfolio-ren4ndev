import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: col-2 / col-10;
  grid-row: start / end;
  justify-content: center;
  height: 100%;
  transition: all .4s ease;
  width: 100%;
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
  font-family: ${({ theme }) => theme.fonts.sans};
  max-width: 600px;
  transition: all .4s ease;
`;

export {
  InfoContainer,
  MonoTextArea,
  DisplayTextArea,
  DescriptionTextArea,
};
