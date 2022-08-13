import {
    PlayerContainer,
    Controls,
    ProgressBar
} from './Styles';

import { BsPlayCircleFill } from 'react-icons/bs';
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io';
import { BiShuffle, BiRepeat } from 'react-icons/bi';


const Player = () => {
    return(
        <PlayerContainer>
            <Controls>
                <BiShuffle />
                <IoIosSkipBackward />
                <BsPlayCircleFill />
                <IoIosSkipForward />
                <BiRepeat />
            </Controls>
            <ProgressBar>

            </ProgressBar>
        </PlayerContainer>
    )
}

export default Player;