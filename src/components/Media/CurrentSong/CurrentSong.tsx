import {
    Container,
    AlbumArt,
    ArtistSong 
} from './Styles';
import { BiHeart } from 'react-icons/bi'

const CurrentSong = () => {
    return(
        <Container>
            <AlbumArt
                src='https://i.scdn.co/image/ab67616d0000b2737f9d1aa43ea7a582519311d2'
                alt='Album Art - Visalia'
            />
            <ArtistSong>
                <p>INV018: BAKA (Feat. MAGIC OF LIFE)</p>
                <p>Fresno, MAGIC OF LIFE</p>
            </ArtistSong>
            <BiHeart />
        </Container>
    )
}

export default CurrentSong;