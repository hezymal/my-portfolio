import { FC } from "react";
import styled from "styled-components";

import { colors } from "utils/colors";
import { pt } from "utils/sizes";

const MainBlock = styled.header`
    border-bottom: 1px solid ${colors.grey.darkest};
    display: flex;
`;

const Titles = styled.div`
    border-right: 1px solid ${colors.grey.darkest};
    text-align: center;
    padding: ${pt(1)} 0;
    width: 45%;
`;

const Title = styled.h1`
    font-family: "Ruslan Display", serif;
    font-size: 4rem;
    margin: 0;
`;

const SubTitle = styled.h2`
    font-size: 1.4rem;
    margin: 0;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${pt(2)};
    padding-bottom: ${pt(1)};
    width: 55%;
`;

const MenuTitle = styled.h3`
    font-size: 1.2rem;
    margin: 0 0 ${pt(1)} 0;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    margin-left: ${pt(3, -2)};

    &:first-child {
        list-style: none;
    }
`;

export const Header: FC = () => {
    return (
        <MainBlock>
            <Titles>
                <Title>Портфолио</Title>
                <SubTitle>Яковлева Захара</SubTitle>
            </Titles>
            <Menu>
                <MenuTitle>Оглавление:</MenuTitle>
                <MenuList>
                    <MenuItem>Обо мне</MenuItem>
                    <MenuItem>Меня интересует</MenuItem>
                    <MenuItem>Примеры работ</MenuItem>
                    <MenuItem>Опыт работы</MenuItem>
                </MenuList>
            </Menu>
        </MainBlock>
    );
};
