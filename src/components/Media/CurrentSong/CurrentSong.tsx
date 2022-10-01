import {
    Container,
    AlbumArt,
    ArtistSong 
} from './Styles';
import { BiHeart } from 'react-icons/bi';
import { PlayingContext } from '../../../context/playing-context';
import { useContext } from 'react';

const CurrentSong = () => {

    const { title, artist, cover } = useContext(PlayingContext);
 
    return(
        <Container>
            <AlbumArt
                src={cover}
                alt={artist}
            />
            <ArtistSong>
                <p>{title}</p>
                <p>{artist}</p>
            </ArtistSong>
            <BiHeart />
        </Container>
    )
}

export default CurrentSong;