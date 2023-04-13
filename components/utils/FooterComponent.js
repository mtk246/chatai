import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import useTranslation from "next-translate/useTranslation";

export default function FooterComponent() {
    const { t, lang } = useTranslation('common');
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                    icon={faGithub}
                    size="4x"
                />
                <a
                    href="https://github.com/mtk246/chatai"
                    className="p-3 link-secondary"
                >
                    {t('footer-github')}
                </a>
            </div>
        </>
    )
}