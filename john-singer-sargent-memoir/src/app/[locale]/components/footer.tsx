import React from 'react';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
    const t = useTranslations('Footer');
    return (
        <div className='max-w-full bg-brown'>
            <div className="p-15 flex justify-around text-white pt-8">
                <div className="flex flex-col max-w-xl">
                    <h1 className="text-2xl mb-2">{t('celebrate')}</h1>
                    <p>{t('description')}</p>
                </div>
                <div className="flex flex-col max-w-xl">
                    <h1 className="text-2xl mb-2">{t('discover')}</h1>
                    <div className="flex flex-row gap-10 justify-end text-end">
                        <div className="flex flex-col ">
                            <p className="hover:text-sephia">Rembrandt</p>
                            <p className="hover:text-sephia">Delacroix</p>
                            <p className="hover:text-sephia">Velázquez</p>
                            <p className="hover:text-sephia">Goya</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="hover:text-sephia">Monet</p>
                            <p className="hover:text-sephia">Van Gogh</p>
                            <p className="hover:text-sephia">Degas</p>
                            <p className="hover:text-sephia">Manet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;