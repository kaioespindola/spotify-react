import { SidebarContainer, SpotifyLogo } from "./Styles";
import logo from '../../assets/logo.svg';
import Menu from "../Menu/Menu";

const Sidebar = () => {
    return(
        <SidebarContainer>
            <SpotifyLogo src={logo} alt="Spotify Logo" loading="lazy"/>
            <Menu />
        </SidebarContainer>
    )
}

export default Sidebar;