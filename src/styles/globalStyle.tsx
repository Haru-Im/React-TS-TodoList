import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-bg : #ADD8E6;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        height : 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;

        width: 100vw;
        height : 100vh;

        font-size: 1.2rem;
        background-color: var(--color-bg);

    }

    #root {
        display: flex;
        min-width: 800px;
        max-width: 1200px;
        height: 100%;
        background-color: var(--color-bg);
        overflow-y: auto;
        padding: 1.5rem;
    }

 
`;
