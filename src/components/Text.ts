import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

export const Text = styled.div`
    h2 {
        font-size: 1.2rem;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        margin: 0;
    }

    h3 {
        font-size: 0.9rem;
        text-align: center;
        text-transform: uppercase;
        margin: 0;
    }

    dl {
        display: flex;
        margin: ${pt(0.5)} 0 0 0;
    }

    dt {
        text-align: right;
        width: 50%;
    }

    dd {
        margin-left: ${pt(1)};
    }

    a {
        color: ${colors.grey.darkest};
    }

    ul {
        margin: ${pt(1)} 0 0;
        padding: 0 0 0 ${pt(3)};
    }

    li {
        margin: ${pt(0.5)} 0 0 0;
    }

    p {
        margin: ${pt(1)} 0 0;
    }
`;
