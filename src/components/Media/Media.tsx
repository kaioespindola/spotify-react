import {
    MediaContainer
} from './Styles';

import CurrentSong from './CurrentSong/CurrentSong';
import Player from './Player/Player';
import Mixer from './Mixer/Mixer';

const Media = () => {
    return(
        <MediaContainer>
            <CurrentSong />
            <Player />
            <Mixer />
        </MediaContainer>
    )
}

export default Media;