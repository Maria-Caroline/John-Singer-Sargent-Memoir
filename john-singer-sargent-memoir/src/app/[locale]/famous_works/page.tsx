'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { parseParagraph } from '../../utils/parseParagraph';
import famousWorksBanner from '../../../../public/famousWorksBanner.png'

const FamousoilPage: React.FC = () => {
//    const { theme } = useTheme()

    const oil = [
        { src: '/CLLR.png', alt: 'Obra 1', title: 'Carnation, Lily, Lily, Rose', creation: 'Around 1885', dimensions: 'w1537 x h174 mm', provenance: 'Curated' },
        { src: '/MHP.png', alt: 'Obra 2', title: 'The Master and His Pupils', creation: '1914', dimensions: 'w711,2 x h558,8 mm', provenance: 'Museum of Fine Arts' },
        { src: '/FOC.png', alt: 'Obra 3', title: 'Fishing for Oysters at Cancale', creation: '1878', dimensions: 'l609,6 x a409,6 mm', provenance: 'Boston Public Library' },
    ];
    const watercolors = [
        { src: '/VML.png', title: 'Villa di Marlia, Lucca', creation: '1910', dimensions: 'w532 x h405 mm', provenance: 'Private Museum of Fine Arts Boston' },
        { src: '/AH.png', title: 'Atlas and the Hesperides', creation: 'between 1922 and 1925', dimensions: '120 in (304.8 cm)', provenance: 'Museum of Fine Arts Boston' },
        { src: '/S.png', title: 'Synagogue', creation: '1919', dimensions: '1,271 x 1,920', provenance: 'Boston Public Library' },
    ];
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [currentWatercolor, setCurrentWatercolor] = useState(0);
    const t = useTranslations('FamousWorks');
    return (
        <div>
            <div>
                <div className="w-full">
                    <section className="relative w-full">
                        <Image src={famousWorksBanner} alt="Banner" layout="responsive" width={16} height={9} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                            <h1 className="text-center text-3xl font-[Montserrat]">
                                {t('title')}
                            </h1>
                        </div>
                    </section>


                    <div className='flex justify-center'>
                        <div className='m-9 flex justify-center max-w-5xl flex-col'>
                            <p className='text-xl text-justify'>{t('paragraphOne')}</p>
                            <br />
                            <h1 className='text-3xl font-semibold font-[Montserrat] dark:text-white'>{t('titleOne')}</h1>

                            <div className="relative w-full overflow-hidden my-10 self-center">
                                <div className="flex justify-center items-center gap-4 mb-4">
                                    <button
                                        onClick={() =>
                                            setCurrentPhoto((prev) =>
                                                prev === 0 ? oil.length - 1 : prev - 1
                                            )
                                        }
                                        className="px-2 py-1 hover:text-gray-300 rounded text-sm"
                                    >
                                        ◀
                                    </button>
                                    <div className="w-[600px] h-[400px] relative">
                                        <Image
                                            src={oil[currentPhoto].src}
                                            alt={t('fig2')}
                                            fill
                                            className="rounded object-contain"
                                        />
                                    </div>
                                    <button
                                        onClick={() =>
                                            setCurrentPhoto((prev) =>
                                                prev === oil.length - 1 ? 0 : prev + 1
                                            )
                                        }
                                        className="px-2 py-1 hover:text-gray-300 rounded text-sm"
                                    >
                                        ▶
                                    </button>
                                </div>

                                {/* Legenda */}
                                <p className="text-center italic mt-2">
                                    <span className="italic">fig {currentPhoto + 1}.</span> {oil[currentPhoto].title}
                                </p>
                            </div>

                            {/* DETALHES ALINHADOS COM O RESTO */}
                            <h1 className='text-3xl font-semibold font-[Montserrat] dark:text-white'>{t('titleTwo')}</h1>
                            <ul className="list-disc text-xl pl-5 space-y-1 text-[var(--color-foreground)] mt-2">
                                <li><strong>{t('creation')}</strong> {oil[currentPhoto].creation}</li>
                                <li><strong>{t('dimensions')}</strong> {oil[currentPhoto].dimensions}</li>
                                <li><strong>{t('provenance')}</strong> {oil[currentPhoto].provenance}</li>
                            </ul>

                            <br /><br />
                            <h1 className='text-3xl font-semibold font-[Montserrat] dark:text-white'>{t('titleThree')}</h1>
                            <div className="relative w-full overflow-hidden my-10 self-center">
                                <div className="flex justify-center items-center gap-4 mb-4">
                                    <button onClick={() => setCurrentWatercolor((prev) => prev === 0 ? watercolors.length - 1 : prev - 1)} className="px-2 py-1 hover:text-gray-300 rounded text-sm">
                                        ◀
                                    </button>
                                    <div className="w-[600px] h-[400px] relative">
                                        <Image
                                            src={watercolors[currentWatercolor].src}
                                            alt={t('fig2')}
                                            fill
                                            className="rounded object-contain"
                                        />
                                    </div>
                                    <button onClick={() => setCurrentWatercolor((prev) => prev === watercolors.length - 1 ? 0 : prev + 1)} className="px-2 py-1 hover:text-gray-300 rounded text-sm">
                                        ▶
                                    </button>
                                </div>
                                <p className="text-center italic mt-2">
                                    <span className="italic">fig {currentWatercolor + 1}.</span> {watercolors[currentWatercolor].title}
                                </p>
                            </div>
                            <h1 className='text-3xl font-semibold font-[Montserrat] dark:text-white'>{t('titleTwo')}</h1>
                            <ul className="list-disc text-xl pl-5 space-y-1 text-[var(--color-foreground)] mt-2">
                                <li><strong>{t('creation')}</strong> {watercolors[currentWatercolor].creation}</li>
                                <li><strong>{t('dimensions')}</strong> {watercolors[currentWatercolor].dimensions}</li>
                                <li><strong>{t('provenance')}</strong> {watercolors[currentWatercolor].provenance}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default FamousoilPage;
