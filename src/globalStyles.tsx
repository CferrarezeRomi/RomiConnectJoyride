import { createGlobalStyle } from "styled-components";
import BackgroundImg from "./assets/background-romi.svg"


const GlobalStyles = createGlobalStyle`
    body{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-weight: 400;

        min-height: 100vh;
        background-image: url(${BackgroundImg}) ;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export default GlobalStyles