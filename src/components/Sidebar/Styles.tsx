import styled from "styled-components";
import Breakpoints from "../../theme/variables/Breakpoints";
import Colors from "../../theme/variables/Colors";

export const SidebarContainer = styled.div`

    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: calc(100vh - 160px);
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: ${Colors.primaryDark};
        border-radius: 10px;

        hr {
            margin: 0 auto;
            width: 82.5%;
            opacity: 0.15;
        }
    }
`

export const SpotifyLogo = styled.img`
    max-width: 130px;
    margin: 25px 0 0 25px;
`