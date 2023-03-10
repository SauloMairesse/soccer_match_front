import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    :root {
        --displayfont: 'Passion One', cursive;
        --headerfont: 'Oswald', sans-serif;
        --scriptfont: 'Lato', sans-serif;
        --logocolor: #ffffff;
        --contrastcolor1: #1877f2;
        --contrastcolor2: #ac0000;
        --divcolor1: #171717;
        --divcolor2: #4d4d4d;
        --divcolor3: #efefef;
        --divcolor4: #ffffff;
        --divcolor5: #252525;
        --textcolor1: #ffffff;
        --textcolor2: #b7b7b7;
        --textcolor3: #9b9b9b;
        --textcolor4: #3c3c3c;
        --textcolor5: #575757;
        --bgcolor: #333333;
        --inputbg: #ffffff;
        --buttonbg: #1877F2;
        --disabledbutton: #585f80;
        --border: #484848;
    }
    * {
        box-sizing: border-box;
    }
    #root {
        display: flex;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background-color: #2a6a5c;
    }
`;

export default GlobalStyle;