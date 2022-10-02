import styled from "styled-components";
import Colors from "../../theme/variables/Colors";
import Breakpoints from "../../theme/variables/Breakpoints";

export const MediaContainer = styled.div`

    @media (min-width: ${Breakpoints.md}) {
        display: grid;
        grid-template-columns: 25% 50% 25%;
        width: 100%;
        height: 90px;
        align-items: center;
        justify-content: space-between;
        background-color: ${Colors.black};
        padding: 0 16px 0 16px;
    }
`
