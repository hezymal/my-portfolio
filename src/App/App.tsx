import { FC, Fragment } from "react";

import { GlobalStyle } from "components/GlobalStyle";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { SubHeader } from "./components/SubHeader";

export const App: FC = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <Layout>
                <Header />
                <SubHeader />
                <Content />
                <Footer />
            </Layout>
        </Fragment>
    );
};
