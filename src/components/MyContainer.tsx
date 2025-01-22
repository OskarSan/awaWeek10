import React from 'react';
import { useTranslation } from 'react-i18next';



const MyContainer: React.FC = () => {


    const {t} = useTranslation();
    
    return (
        <div>
            {t("home page")}
        </div>
    );
}

export default MyContainer;