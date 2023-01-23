import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  column-gap: 16px;
  display: grid;
  grid-template-rows: 80px [start] 1fr [end] 80px;
  grid-template-columns: [start] 80px [col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [col-7] 1fr [col-8] 1fr [col-9] 1fr [col-10] 1fr [col-11] 1fr [col-12] 1fr [end] 80px;
  min-height: fit-content;
`;

export default SectionContainer;
