import { FC } from "react";
import styled from "styled-components";

import { BreakLine } from "components/BreakLine";
import { Icon } from "components/Icon";
import { Text } from "components/Text";
import { colors } from "utils/colors";
import { pt } from "utils/sizes";

const Block = styled.div`
    border: 1px solid ${colors.grey.darkest};
    margin-top: ${pt(2)};
    padding: ${pt(1)};
`;

const Columns = styled.div`
    display: grid;
    grid-template-columns: 30% 30% auto;
    grid-template-rows: 30% auto;
`;

const Column = styled.section`
    padding: ${pt(2)};
`;

const AboutMeColumn = styled(Column)`
    grid-column: 1;
    grid-row: 1;
`;

const InterestsColumn = styled(Column)`
    border-left: 1px solid ${colors.grey.darkest};
    grid-column: 2;
    grid-row: 1;
`;

const ProjectsColumn = styled(Column)`
    border-left: 1px solid ${colors.grey.darkest};
    grid-column: 3;
    grid-row: 1 / span 2;
`;

const ExperienceColumn = styled(Column)`
    border-top: 1px solid ${colors.grey.darkest};
    grid-column: 1 / span 2;
    grid-row: 2;
`;

const ExperienceInnerColumns = styled.div`
    display: flex;
`;

const ExperienceLeftInnerColumn = styled.div`
    border-right: 1px solid ${colors.grey.darkest};
    padding-right: ${pt(2)};
    width: 50%;

    ${Block}:first-child {
        margin-top: 0;
    }
`;

const ExperienceRightInnerColumn = styled.div`
    padding-left: ${pt(2)};
    width: 50%;

    ${Block}:first-child {
        margin-top: 0;
    }
`;

export const Content: FC = () => {
    return (
        <Columns>
            <AboutMeColumn>
                <Text>
                    <h2>Обо мне</h2>
                    <BreakLine />
                    <dl>
                        <dt>Фамилия:</dt>
                        <dd>Яковлев</dd>
                    </dl>
                    <dl>
                        <dt>Имя:</dt>
                        <dd>Захар</dd>
                    </dl>
                    <dl>
                        <dt>Возраст:</dt>
                        <dd>31 лет</dd>
                    </dl>
                    <dl>
                        <dt>Опыт работы в IT:</dt>
                        <dd>6 года</dd>
                    </dl>
                    <dl>
                        <dt>На текущее время:</dt>
                        <dd>Студент</dd>
                    </dl>
                    <dl>
                        <dt>
                            <Icon type="telegram" />:
                        </dt>
                        <dd>@zyakovlev</dd>
                    </dl>
                    <dl>
                        <dt>
                            <Icon type="github" />:
                        </dt>
                        <dd>
                            <a href="https://github.com/hezymal">hezymal</a>
                        </dd>
                    </dl>
                </Text>
            </AboutMeColumn>
            <InterestsColumn>
                <Text>
                    <h2>Меня интересует</h2>
                    <BreakLine />
                    <ul>
                        <li>JavaScript / TypeScript / ReactJS;</li>
                        <li>C# / ASP.NET;</li>
                        <li>Nginx;</li>
                        <li>Postgres / Redis / RabbitMQ;</li>
                        <li>Linux / Docker / Kubernetes.</li>
                    </ul>
                </Text>
            </InterestsColumn>
            <ProjectsColumn>
                <Text>
                    <h2>Примеры работ</h2>
                    <BreakLine />
                    <Block>
                        <h3>Портфолио</h3>
                        <p>
                            Написано на ReactJS, с стилизацией на
                            Styled-Components.{" "}
                            <a href="https://github.com/hezymal/my-portfolio">
                                Репозиторий страницы
                            </a>
                            .
                        </p>
                    </Block>
                    <Block>
                        <h3>Текущий pet-проект</h3>
                        <p>
                            Пока стек такой: ReactJS, NestJS, MongoDB.{" "}
                            <a href="https://github.com/hezymal/turgut">
                                Репозиторий страницы
                            </a>
                            .
                        </p>
                    </Block>
                    <Block>
                        <h3>Тетрис</h3>
                        <p>
                            Писал на "голом" JavaScript, в ООП-шном стиле, в
                            момент усталости от декларативного подхода. Из
                            интересного в проекте нет паттернов из GoF, для
                            отрисовки используется Canvas 2D и собирается на
                            Parcel.{" "}
                            <a href="https://github.com/hezymal/tetris">
                                Репозиторий страницы
                            </a>
                            .
                        </p>
                    </Block>
                    <Block>
                        <h3>Ant Design . SASS</h3>
                        <p>
                            Ant Design использует LESS для стилизации своих
                            компонентов, для проектов созданных с помощью Create
                            React App - это является сложностью, из-за того что
                            LESS не поддерживает. Проект предлагает подключать
                            (импортировать) стили как SASS-модули. В целом
                            проект забросил как сделал так сразу, из-за того что
                            это в основном был ручной труд. Получился интересный
                            опыт, посмотрел чем отличаются оба препроцессора, а
                            также пакет публиковал на{" "}
                            <a href="https://www.npmjs.com/package/antd-sass">
                                NPMjs.com
                            </a>
                            .{" "}
                            <a href="https://github.com/hezymal/antd-sass">
                                Репозиторий страницы
                            </a>
                            .
                        </p>
                    </Block>
                    <Block>
                        <h3>Куча заброшенного кода</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/hezymal/messenger">
                                    messenger
                                </a>{" "}
                                - мессенджер не дописанный;
                            </li>
                            <li>
                                <a href="https://github.com/hezymal/react-select">
                                    react-select
                                </a>{" "}
                                - компонент для ReactJS;
                            </li>
                            <li>
                                <a href="https://github.com/hezymal/react-tooltip">
                                    react-tooltip
                                </a>{" "}
                                - компонент для ReactJS;
                            </li>
                            <li>
                                <a href="https://github.com/hezymal/alfaSlider">
                                    alfaSlider
                                </a>{" "}
                                - плагин для jQuery;
                            </li>
                            <li>
                                <a href="https://github.com/hezymal/alfaNavbar">
                                    alfaNavbar
                                </a>{" "}
                                - плагин для jQuery.
                            </li>
                        </ul>
                    </Block>
                </Text>
            </ProjectsColumn>
            <ExperienceColumn>
                <Text>
                    <h2>Опыт работы</h2>
                    <BreakLine />
                    <ExperienceInnerColumns>
                        <ExperienceLeftInnerColumn>
                            <Block>
                                <h3>Портфолио</h3>
                                <p>
                                    Написано на ReactJS, с стилизацией на
                                    Styled-Components.{" "}
                                    <a href="https://github.com/hezymal/my-portfolio">
                                        Репозиторий страницы
                                    </a>
                                    .
                                </p>
                            </Block>
                            <Block>
                                <h3>Портфолио</h3>
                                <p>
                                    Написано на ReactJS, с стилизацией на
                                    Styled-Components.{" "}
                                    <a href="https://github.com/hezymal/my-portfolio">
                                        Репозиторий страницы
                                    </a>
                                    .
                                </p>
                            </Block>
                        </ExperienceLeftInnerColumn>
                        <ExperienceRightInnerColumn>
                            <Block>
                                <h3>Портфолио</h3>
                                <p>
                                    Написано на ReactJS, с стилизацией на
                                    Styled-Components.{" "}
                                    <a href="https://github.com/hezymal/my-portfolio">
                                        Репозиторий страницы
                                    </a>
                                    .
                                </p>
                            </Block>
                            <Block>
                                <h3>Портфолио</h3>
                                <p>
                                    Написано на ReactJS, с стилизацией на
                                    Styled-Components.{" "}
                                    <a href="https://github.com/hezymal/my-portfolio">
                                        Репозиторий страницы
                                    </a>
                                    .
                                </p>
                            </Block>
                        </ExperienceRightInnerColumn>
                    </ExperienceInnerColumns>
                </Text>
            </ExperienceColumn>
        </Columns>
    );
};
