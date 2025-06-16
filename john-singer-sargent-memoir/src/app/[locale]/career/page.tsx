'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'

import { parseParagraph } from '../../utils/parseParagraph';
import careerBanner from '../../../../public/careerBanner.png'
import madameX from './../../../../public/madameX.png'
import sargentsAtelier from './../../../../public/sargentsAtelier.png'


const CareerPage: React.FC = () => {
 //   const { theme } = useTheme()


    const t = useTranslations('Career');
    return (
        <div>
            <div>
                <div className="w-full">
                    <section className="relative w-full">
                        <Image src={careerBanner} alt="Banner" layout="responsive" width={16} height={9} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
                            <h1 className="text-center text-3xl font-[Montserrat]">
                                {t('title')}
                            </h1>
                        </div>
                    </section>
                </div>
                <div className='flex justify-center'>
                    <div className='m-9 flex justify-center max-w-5xl flex-col'>
                        <p className='text-xl text-justify'>
                            {parseParagraph(t('paragraphOne'), t)}
                            <br />
                            <br />
                            {t('paragraphTwo')}
                            <br />
                            <br />
                            {t('paragraphThree')}
                        </p>

                        <div className='m-7 relative self-center w-3xs'>
                            <div className="m-3">
                                <h1 className='text-center text-2xl font-[Montserrat] dark:text-white'>{t('titleSection')}</h1>
                                <div className='m-1 self-center h-px w-s bg-[var(--color-foreground)]'></div>
                                <p className='text-center italic font-[Montserrat] dark:text-white'>{t('subtitle')}</p>
                            </div>
                            <Image
                                src={madameX}
                                alt="Portrait of Madame X"
                                layout="responsive"
                                width={300}
                                height={150}
                            />
                            <p className="m-2 text-center italic">
                                {t('fig1')}
                            </p>
                        </div>
                        <p className='text-xl text-justify'>
                            {t('paragraphFour')}
                            <br />
                            <br />
                            {t('paragraphFive')}
                        </p>
                        <div className='m-9 relative self-center'>
                            <Image
                                src={sargentsAtelier}
                                alt="Sargent in his Atelier"
                                layout="responsive"
                            />
                            <p className="m-2 text-center italic">
                                {t('fig2')}
                            </p>
                        </div>
                        <p className='text-xl text-justify'>
                            {t('paragraphSix')}
                            <br />
                            <br />
                            {parseParagraph(t('paragraphSeven'), t)}
                            <br />
                            <br />
                            {parseParagraph(t('paragraphEight'), t)}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CareerPage;
