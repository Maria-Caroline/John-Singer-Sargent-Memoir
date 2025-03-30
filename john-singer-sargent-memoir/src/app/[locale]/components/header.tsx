import React from 'react';
import Link from 'next/link'; // Keep this as Link for Next.js links
import { useTranslations } from 'next-intl';
import LanguageToggle from './language-toggle';


const Header: React.FC = () => {
    const t = useTranslations('Header');
    return (
        <div className="sticky top-0 z-50 max-w max-h-[10vh] bg-brown text-white p-8 flex justify-between items-center">
            <h1 className="text-2xl font-[Montserrat]">John Singer Sargent: A Memoir</h1>
            <div className="flex gap-9 font-thin">
                <Link className="hover:text-sephia" href="/">{t('summary')}</Link>
                <Link className="hover:text-sephia" href="/early_life">{t('earlyLife')}</Link>
                <Link className="hover:text-sephia" href="/career">{t('career')}</Link>
                <Link className="hover:text-sephia" href="/famous_works">{t('famousWorks')}</Link>
                <Link className="hover:text-sephia" href="/later_life">{t('laterLife')}</Link>
                <Link className="hover:text-sephia" href="/quiz">{t('quiz')}</Link>
                <LanguageToggle
                    localeNames={{
                        en: 'English',
                        fr: 'Français',
                    }}
                />
            </div>
        </div>
    );
}

export default Header;
