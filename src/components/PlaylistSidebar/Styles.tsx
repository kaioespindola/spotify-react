import styled from "styled-components";
import Colors from "../../theme/variables/Colors";

export const PlaylistsContainer = styled.ul`
    list-style: none;
    overflow-x: scroll;
    padding-top: 15px;
`

export const PlaylistItem = styled.li`
    height: 32px;
    font-weight: 400;
    padding: 0 26px 0 26px;
    color: ${Colors.primaryLight};
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-transform: none;
    letter-spacing: normal;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
        opacity: 1.0
    }
`