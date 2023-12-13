import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram,
    faGithub,
    IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

type Type = "telegram" | "github";

interface Props {
    type: Type;
}

const getIconByType = (type: Type): IconDefinition => {
    switch (type) {
        case "telegram":
            return faTelegram;

        case "github":
            return faGithub;
    }
};

export const Icon: FC<Props> = ({ type }) => (
    <FontAwesomeIcon icon={getIconByType(type)} />
);
