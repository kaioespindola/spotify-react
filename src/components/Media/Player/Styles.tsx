import styled from "styled-components";
import Colors from "../../../theme/variables/Colors";
import Breakpoints from "../../../theme/variables/Breakpoints";

export const PlayerContainer = styled.div`
    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    svg {
        width: 22px;
        height: 22px;
        color: ${Colors.primaryGray};
        font-weight: 800;

        &:nth-child(3) {
            width: 35px;
            height: 35px;
            color: ${Colors.primaryLight};
        }
    }
`

export const ProgressBar = styled.div`

`