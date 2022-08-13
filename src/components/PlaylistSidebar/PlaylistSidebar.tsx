import { useState } from "react";
import { PlaylistsContainer, PlaylistItem } from './Styles';

const PlaylistSidebar = () => {
    const inistalState: Array<string> = [
        'Moody Mix',
        'Chill Mix',
        'Release Radar',
        'Daily Mix',
        'Daily Mix 2',
        'Moody Mix',
        'Chill Mix',
        'Release Radar',
        'Moody Mix',
        'Chill Mix',
        'Release Radar',
        'Daily Mix',
        'Daily Mix 2',
        'Moody Mix',
        'Chill Mix',
        'Release Radar',
        'Moody Mix',
        'Chill Mix',
        'Release Radar',
        'Daily Mix',
        'Daily Mix 2',
        'Moody Mix',
        'Chill Mix',
        'Release Radar'
    ]

    const [playlists, setPLaylists] = useState(inistalState);

    return(
        <PlaylistsContainer>
            {playlists.map((playlist) => {
                return <PlaylistItem>{playlist}</PlaylistItem>
            })}
        </PlaylistsContainer>
    )
}

export default PlaylistSidebar;