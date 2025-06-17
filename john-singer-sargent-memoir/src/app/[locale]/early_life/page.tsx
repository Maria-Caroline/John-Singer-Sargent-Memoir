'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'
import earlyLifeBanner from '../../../../public/earlyLifeBanner.png'
import { useState } from 'react';
import { parseParagraph } from '../utils/parseParagraph';

const EarlyLifePage: React.FC = () => {
    const { theme } = useTheme()
    const imgSrc = theme === 'dark' ? '/youngSargent-dark.png' : '/youngSargent-light.png';

    const t = useTranslations('EarlyLife');
    const works = [
        { src: '/sketch1.png', alt: 'Obra 1' },
        { src: '/sketch2.png', alt: 'Obra 2' },
        { src: '/sketch3.png', alt: 'Obra 3' },
        // substitua pelos caminhos reais das suas imagens
    ];
    const [currentPhoto, setCurrentPhoto] = useState(0);
    return (
        <div>
            <div>
                <div className="w-full">
                    <section className="relative w-full">
                        <Image src={earlyLifeBanner} alt="Banner" layout="responsive" width={16} height={9} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                            <h1 className="text-center text-3xl font-[Montserrat]">
                                {t('title')}
                            </h1>
                        </div>
                    </section>
                </div>
                <div className="relative m-20 flex justify-center items-center h-40">
                    <div className="absolute top-1/2 left-1/2 h-1 w-4xl bg-[var(--color-foreground)] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="flex gap-x-24">
                        <div className="relative flex flex-col items-center w-max duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-[var(--color-sephia)] font-bold text-4xl -rotate-90 -translate-y-15">1854</h1>
                            <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-[var(--color-sephia)] z-10"></div>
                            <div className="absolute left-16 -translate-y-20 text-left w-[140px]">
                                <p className="text-sm text-[var(--color-foreground)]">
                                    {t('timelineOne')}
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center w-max duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-[var(--color-sephia)] font-bold text-4xl -rotate-90 translate-y-15 ">1856</h1>
                            <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-[var(--color-sephia)] z-10"></div>
                            <div className="absolute left-16 translate-y-9 text-left w-[140px]">
                                <p className="text-sm text-[var(--color-foreground)]">
                                    {t('timelineTwo')}
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center w-max duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-[var(--color-sephia)] font-bold text-4xl -rotate-90 -translate-y-15">1869</h1>
                            <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-[var(--color-sephia)] z-10"></div>
                            <div className="absolute left-16 -translate-y-20 text-left w-[140px]">
                                <p className="text-sm text-[var(--color-foreground)]">
                                    {t('timelineThree')}
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center w-max duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-[var(--color-sephia)] font-bold text-4xl -rotate-90 translate-y-15">1873</h1>
                            <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-[var(--color-sephia)] z-10"></div>
                            <div className="absolute left-16 translate-y-9 text-left w-[140px]">
                                <p className="text-sm text-[var(--color-foreground)]">
                                    {t('timelineFour')}
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center w-max duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-[var(--color-sephia)] font-bold text-4xl -rotate-90 -translate-y-15">1874</h1>
                            <div className="absolute top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-[var(--color-sephia)] z-10"></div>
                            <div className="absolute left-16 -translate-y-20 text-left w-[140px]">
                                <p className="text-sm text-[var(--color-foreground)]">
                                    {t('timelineFive')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>

                    <div className='m-9 flex justify-center max-w-5xl flex-col'>

                        <p className='text-xl text-justify'>
                            {t('paragraphOne')}
                            <br />
                            <br />
                            {t('paragraphTwo')}
                        </p>
                        <div className='m-7 relative self-center w-3xs'>
                            <Image
                                src={imgSrc}
                                alt="John Singer Sargent's Sign"
                                layout="responsive"
                                width={300}
                                height={150}
                            />
                            <p className="text-center italic">
                                  {t('fig1')}
                            </p>
                        </div>
                        <p className='text-xl text-justify'>
                            {parseParagraph(t('paragraphThree'), t)}
                            <br />
                            <br />
                            {parseParagraph(t('paragraphFour'), t)}
                            <br />
                            <br />
                            {t('paragraphFive')}
                            <br />
                            <br />
                            {t('paragraphSix')}
                            <br />
                            <br />
                            {t('paragraphSeven')}
                            <br />
                            <br />
                            {parseParagraph(t('paragraphEight'), t)}
                        </p>
                    </div>
                </div>
                <div className="relative w-full overflow-hidden mb-10">
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() =>
                                    setCurrentPhoto((prev) =>
                                        prev === 0 ? works.length - 1 : prev - 1
                                    )
                                }
                                className="px-2 py-1 hover:text-gray-300 rounded text-sm"
                            >
                                ◀
                            </button>
                            <Image
                                src={works[currentPhoto].src}
                                alt={t('fig2')}
                                width={600}
                                height={500}
                  
                                className="rounded shadow-md"
                            />
                            <button
                                onClick={() =>
                                    setCurrentPhoto((prev) =>
                                        prev === works.length - 1 ? 0 : prev + 1
                                    )
                                }
                                className="px-2 py-1 hover:text-gray-300 rounded text-sm"
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                    <p className="text-center italic">
                        {t('fig2')}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default EarlyLifePage;
