import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --color-bg : beige;
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

    #app {
        display: flex;
        max-width: 400px;
        height: 100%;
        background-color: var(--color-bg);
        overflow-y: auto;
        padding: 1.5rem;
    }
`;
