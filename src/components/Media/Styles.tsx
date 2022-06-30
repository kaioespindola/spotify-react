import styled from "styled-components";
import Colors from "../../theme/variables/Colors";
import Breakpoints from "../../theme/variables/Breakpoints";

export const MediaContainer = styled.div`

    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90px;
        background-color: ${Colors.secondaryDark};
        padding: 0 16px 0 16px;
    }
`