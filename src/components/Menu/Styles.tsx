import styled from "styled-components"

export const MenuContainer = styled.div`
    svg {
        height: 30px;
        width: 30px;
    }
`

export const MenuList = styled.ul`
    list-style: none;
    margin: 28px 0 28px 0;
`

export const MenuItem = styled.li`
    display: flex;
    height: 40px;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 700;
    gap: 16px;
    opacity: 0.8;
    transition: opacity .3s ease-in-out;
    cursor: pointer;

    svg {
        max-width: 28px;
    }

    &:hover {
        opacity: 1;
    }
`

export const CreatePlaylistIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 100;
    width: 26px;
    height: 26px;
    border-radius: 2px;
    background-color: white;
    color: black;
    padding-top: 2px;

    &:before {
        content: "+";
    }
`

export const LikedSongsIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(77,25,243);
    background: linear-gradient(145deg, rgba(77,25,243,1) 0%, rgba(129,119,231,1) 44%, rgba(188,224,218,1) 100%);
    width: 26px;
    height: 26px;
    border-radius: 2px;

    svg {
        width: 15px;
        height: 15px;
    }
`