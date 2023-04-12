import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json';

const { locales } = i18nConfig;

export default function Navbar({children}) {
    const { t, lang } = useTranslation('common');

    return (
        <>
            <Dropdown className="ms-auto d-flex justify-content-end">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {t('select-language')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        locales.map((lng) => {
                            return (
                                <>
                                    <Dropdown.Item>
                                        <Link
                                            href="/"
                                            locale={lng}
                                            key={lng}
                                            className="btn w-100 text-start text-uppercase"
                                        >
                                            {lng}
                                        </Link>
                                    </Dropdown.Item>
                                </>
                            )
                        }
                    )}
                </Dropdown.Menu>
            </Dropdown>
            {children}
        </>
    )
}
