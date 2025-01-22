import { changeLanguage } from 'i18next';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const Header: React.FC = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }



    return (
        <header>
            <h1>
                Title!!!
            </h1>
            <nav>
                <ul>
                    <a href="/">{t("Home")}</a>
                    <a href="/about">{t("About")}</a>
                    <button onClick={()=>changeLanguage("fi")}>FI</button>
                    <button onClick={()=>changeLanguage("en")}>EN</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header