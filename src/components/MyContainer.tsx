import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';



const MyContainer: React.FC = () => {


    const {t, i18n} = useTranslation();
    
    return (
        <div>
            {t("home page")}
        </div>
    );
}

export default MyContainer;