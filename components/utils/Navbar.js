import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json';
import Image from 'next/image';

const { locales } = i18nConfig;

export default function Navbar({children}) {
    const { t, lang } = useTranslation('common');

    return (
        <>
            <Dropdown className="d-flex justify-content-between align-items-center container w-100 my-3">
                <Image src="/robot.gif" alt="logo" width="100" height="100" />

                <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="h-50"
                >
                    {t('select-language')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        locales.map((lng, index) => {
                            return (
                                <>
                                    <Dropdown.Item key={index}>
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
