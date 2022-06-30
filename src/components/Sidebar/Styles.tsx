import styled from "styled-components";
import Breakpoints from "../../theme/variables/Breakpoints";
import Colors from "../../theme/variables/Colors";

export const SidebarContainer = styled.div`

    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: calc(100vh - 90px);
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: ${Colors.black};
        padding: 25px;
    }
`

export const SpotifyLogo = styled.img`
    max-width: 130px;
`