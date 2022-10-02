import styled from 'styled-components';
import Colors from '../variables/Colors';
import Breakpoints from '../variables/Breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 11px;

  @media (min-width: ${Breakpoints.md}) {
    grid-template-columns: 250px 1fr;
  }
`;

export const Content = styled.div`
    width: auto;
    height: calc(100vh - 160px);
    background-color: ${Colors.primaryDark};
    overflow-y: scroll;
    border-radius: 10px;
    padding: 30px;
`

export default Container;