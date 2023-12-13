import { FC } from "react";
import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

const MainBlock = styled.header`
    border-top: 4px solid ${colors.grey.darkest};
    padding: ${pt(1)} 0 0;
    text-align: center;
`;

export const Footer: FC = () => {
    return <MainBlock>стр. 1</MainBlock>;
};
