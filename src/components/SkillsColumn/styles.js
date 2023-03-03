import styled from 'styled-components';
import {
  DatabaseFillGear,
  FileEarmarkCodeFill,
  ListCheck,
} from '@styled-icons/bootstrap';
import { breakpoints } from '../../styles/theme';

const ColumnBox = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: -12px 10px 31px -15px #0A192F;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  margin: 10px auto;
  max-width: 300px;
  min-height: 550px;
  padding: 1.5rem 1rem;
  width: 100%;
  
  @media screen and (min-width: ${breakpoints.medium}) {
    height: 100%;
    margin: 0;
    padding: 30px 50px;
    width: 32%;
  }
`;

const IconBox = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.quarternary};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  height: 60px;
  margin-bottom: 25px;
  width: 60px;
`;

const BackendIcon = styled(DatabaseFillGear)`
  color: ${({ theme }) => theme.colors.white};
  height: 60%;
`;

const FrontendIcon = styled(FileEarmarkCodeFill)`
  color: ${({ theme }) => theme.colors.white};
  height: 60%;
`;

const ListIcon = styled(ListCheck)`
  color: ${({ theme }) => theme.colors.white};
  height: 60%;
`;

const TitleArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-bottom: 25px;

  h4 {
    text-align: center;
  }
`;

const DescriptionArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  p {
    text-align: center;
  }
`;

const SubtitleArea = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  margin-top: 25px;
`;

const ContentArea = styled.ul`
  font-family: ${({ theme }) => theme.fonts.sans};
  list-style: none;
`;

const ListItem = styled.li`
  text-align: center;
`;

export {
  ColumnBox,
  IconBox,
  TitleArea,
  DescriptionArea,
  SubtitleArea,
  ContentArea,
  ListItem,
  BackendIcon,
  FrontendIcon,
  ListIcon,
};
