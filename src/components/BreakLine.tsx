import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

export const BreakLine = styled.hr`
    background-color: ${colors.grey.darkest};
    border: none;
    height: 1px;
    width: 30px;
    margin: ${pt(1)} auto;
`;
