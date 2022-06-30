import { SidebarContainer, SpotifyLogo } from "./Styles";
import logo from '../../assets/logo.svg';
import Menu from "../Menu/Menu";
import PlaylistSidebar from "../PlaylistSidebar/PlaylistSidebar";

const Sidebar = () => {
    return(
        <SidebarContainer>
            <SpotifyLogo src={logo} alt="Spotify Logo" loading="lazy"/>
            <Menu />
            <hr />
            <PlaylistSidebar />
        </SidebarContainer>
    )
}

export default Sidebar;