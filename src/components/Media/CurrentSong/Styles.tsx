import styled from "styled-components";
import Colors from '../../../theme/variables/Colors';

export const Container = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin: 0 14px;
        width: 18px;
        height: 18px;
        color: ${Colors.primaryLight};
    }
`

export const AlbumArt = styled.img`
    max-width: 56px;
`

export const ArtistSong = styled.div`
    margin: 0 14px;

    p {
        font-size: 11px;
        font-weight: 300;
        color: ${Colors.primaryGray};

        &:first-child {
            font-size: 13px;
            font-weight: 600;
            padding-bottom: 6px;
            color: ${Colors.primaryLight};
        }
    }
`