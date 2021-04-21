import React from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const languageNames = {
    en: '🇺🇸  English',
    jp: '🇯🇵  日本語',
    np: '🇳🇵  नेपाली'
};

const LanguageSwitcher = () => {
    const router = useRouter();

    const handleLocaleChange = (event) => {
        router.push(router.pathname, router.asPath, {
            locale: event.target.value
        });
    };

    return (
        <select
            id="location"
            name="location"
            onChange={handleLocaleChange}
            value={router.locale}
            className="block px-3 pl-3 pr-8 border border-transparent text-sm rounded-md text-blue-200 bg-blue-700">
            {router.locales.map((locale, index) => {
                return (
                    <option key={index.toString()} value={locale}>
                        {languageNames[locale]}
                    </option>
                );
            })}
        </select>
    );
};

export default LanguageSwitcher;
