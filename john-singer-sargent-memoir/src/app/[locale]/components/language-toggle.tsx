'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { MdTranslate } from "react-icons/md";

interface LanguageToggleProps {
    localeNames: {
        [key: string]: string;
    };
}

const LanguageToggleDropdown: React.FC<LanguageToggleProps> = ({ localeNames }) => {
    const currentLocale = useLocale();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const pathnameWithoutLocale = pathname.replace(new RegExp(`^/${currentLocale}`), '');

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-md font-medium ">
                <MdTranslate />
                {localeNames[currentLocale]}
                <svg
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-25 rounded-md shadow-lg bg-brown ">
                    <div>
                        {Object.entries(localeNames).map(([locale, name]) => (
                            <Link
                                key={locale}
                                href={`/${locale}${pathnameWithoutLocale}`}
                                className={`block px-4 py-2 text-sm  rounded-md ${currentLocale === locale
                                        ? 'text-sephia'
                                        : 'text-white hover:bg-lightbrown '
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >

                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageToggleDropdown;