import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function ComponentSwitcher() {
    const {t, lang } = useTranslation('common');
    const router = useRouter();

    const navArray = [
        {
            name: t('text-generate-text'),
            path: "/",
        },
        {
            name: t('text-generate-image'),
            path: "/generate-image"
        }
    ]

    return (
        <>
            <div className="text-center">
                <ul
                    className="nav nav-pills justify-content-center align-items-center"
                >
                    {
                        navArray.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`p-0 ${
                                        router.pathname === item.path ? "nav-link active" : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href={item.path}
                                        className={`btn p-3 ${
                                        router.pathname === item.path ? "text-decoration-none text-white" : "text-decoration-none text-secondary"
                                    }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}