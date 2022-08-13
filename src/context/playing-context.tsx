import { createContext, useState } from "react";

const initialState = {
    mp3: '',
    artist: 'Fresno, MAGIC OF LIFE',
    title: 'INV018: BAKA (Feat. MAGIC OF LIFE)',
    cover: 'https://i.scdn.co/image/ab67616d0000b2737f9d1aa43ea7a582519311d2'
}

export const PlayingContext = createContext(initialState);

export const PlayingContextProvider = ({ children }: any) => {
    const [playing, setPlaying] = useState(initialState);

    return(
        <PlayingContext.Provider value={playing}>
            {children}
        </PlayingContext.Provider>
    )
}
