import styled from 'styled-components';
import Breakpoints from '../variables/Breakpoints';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${Breakpoints.md}) {
    grid-template-columns: 250px 1fr;
  }
`;

export default Container;