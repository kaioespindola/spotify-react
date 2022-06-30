import styled from 'styled-components';
import Breakpoints from '../variables/Breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${Breakpoints.md}) {
    grid-template-columns: 250px 1fr;
  }
`;

export const Content = styled.div`
    width: auto;
    height: calc(100vh - 90px);
`

export default Container;