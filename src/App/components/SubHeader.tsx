import { FC } from "react";
import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

const MainBlock = styled.div`
    border-bottom: 4px solid ${colors.grey.darkest};
    display: flex;
    justify-content: space-between;
    padding: ${pt(0.5)} 0;
`;

const LeftPart = styled.div`
    padding-left: ${pt(1)};
    width: 50%;
`;

const RightPart = styled.div`
    padding-right: ${pt(1)};
    text-align: right;
    width: 50%;
`;

export const SubHeader: FC = () => {
    return (
        <MainBlock>
            <LeftPart>11 декабря 2023 г., понедельник</LeftPart>
            <RightPart>Версия №2</RightPart>
        </MainBlock>
    );
};
