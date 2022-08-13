import { createGlobalStyle } from "styled-components";
import Colors from "../variables/Colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #121212;
        font-family: 'Montserrat', sans-serif;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *::-webkit-scrollbar {
        width: 12px;
        height: 100%;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${Colors.secondaryGray};
    }

`