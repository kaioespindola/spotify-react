import styled from "styled-components";
import Breakpoints from '../../theme/variables/Breakpoints';
import logo from '../../assets/logo.svg';

const MenuContainer = styled.div`

    @media (min-width: ${Breakpoints.md}) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: 100vh;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background-color: #000000;
        padding: 24px;
    }

    img {
        max-width: 129px;
    }
`;

const Menu = () => {
    return(
        <MenuContainer>
            <img src={logo} alt="Spotify Logo" loading="lazy"/>
            <p>Menu aqui? hehe</p>
        </MenuContainer>
    )
}

export default Menu;