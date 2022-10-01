import styled from "styled-components";
import Colors from "../../../theme/variables/Colors";
import Breakpoints from "../../../theme/variables/Breakpoints";

export const PlayerContainer = styled.div`
    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    svg {
        width: 22px;
        height: 22px;
        color: ${Colors.primaryGray};
        font-weight: 800;

        &:nth-child(3) {
            width: 40px;
            height: 40px;
            color: ${Colors.primaryLight};
        }
    }
`

export const ProgressBar = styled.div`
    width: 100%;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${Colors.primaryGray};
`

export const Timestamp = styled.div`
    width: 65%;
    height: 3px;
    background-color: ${Colors.secondaryGray};
`