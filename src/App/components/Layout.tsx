import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

export const Layout = styled.div`
    background-color: ${colors.grey.light};
    margin: ${pt(1)} auto;
    padding: ${pt(4)};
    width: ${pt(120)};
`;
