import {
    PlayerContainer,
    Controls,
    ProgressBar,
    Timestamp
} from './Styles';

import { BsPlayCircleFill } from 'react-icons/bs';
import { IoIosSkipBackward, IoIosPlayCircle, IoIosSkipForward } from 'react-icons/io';
import { BiRepeat, BiShuffle } from 'react-icons/bi';



const Player = () => {
    return(
        <PlayerContainer>
            <Controls>
                <BiShuffle />
                <IoIosSkipBackward />
                <IoIosPlayCircle />
                <IoIosSkipForward />
                <BiRepeat />
            </Controls>
            <ProgressBar>
                <div>0:00</div>
                <Timestamp />
                <div>3:12</div>
            </ProgressBar>
        </PlayerContainer>
    )
}

export default Player;