import { createGlobalStyle } from "styled-components";

import { colors } from "utils/colors";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        color: ${colors.grey.darkest};
        font-family: "Old Standard TT", serif;
    }
`;
