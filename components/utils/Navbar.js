import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../../i18n.json';

const { locales } = i18nConfig;

export default function Navbar({children}) {
    const { t, lang } = useTranslation('common');
    const example = t('variable-example', { count: 43 });

    return (
        <>
            <Dropdown className="ms-auto d-flex justify-content-end">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <ChangeLanguage />
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {children}
        </>
    )
}


function ChangeLanguage() {
    const { t, lang } = useTranslation()
  
    return locales.map((lng) => {
      if (lng === lang) return null
  
      return (
      <Link href="/" locale={lng} key={lng}>
          {lng}
        </Link>
      )
    })
  }