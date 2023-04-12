import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';


export default function HeaderComponent() {
    const { t, lang } = useTranslation('common')

    return (
        <Head>
            <title>{t('headingTitle')}</title>
        </Head>
    )
}