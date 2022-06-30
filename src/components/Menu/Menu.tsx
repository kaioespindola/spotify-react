import {
    MenuContainer,
    MenuList,
    MenuItem,
    CreatePlaylistIcon,
    LikedSongsIcon
} from './Styles'
import { AiOutlineHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import { VscLibrary } from 'react-icons/vsc'

const Menu = () => {
    return(
        <MenuContainer>
            <MenuList>
                <MenuItem>
                    <AiOutlineHome /> Home
                </MenuItem>
                <MenuItem>
                    <AiOutlineSearch /> Search
                </MenuItem>
                <MenuItem>
                    <VscLibrary /> Your Library
                </MenuItem>
            </MenuList>

            <MenuList>
                <MenuItem>
                    <CreatePlaylistIcon /> Create Playlist
                </MenuItem>
                <MenuItem>
                    <LikedSongsIcon>
                        <AiFillHeart />
                    </LikedSongsIcon> Liked Songs
                </MenuItem>
            </MenuList>
        </MenuContainer>
    )
}

export default Menu;