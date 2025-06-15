'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'

import { parseParagraph } from '../../utils/parseParagraph';
import laterLifeBanner from '../../../../public/laterLifeBanner.png'
import madameX from './../../../../public/sargentGrave.png'
import lastSargent from './../../../../public/lastSargent.png'

const LaterLifePage: React.FC = () => {
    const { theme } = useTheme()


    const t = useTranslations('LaterLife');
    return (
        <div>
            <div>
                <div className="w-full">
                    <section className="relative w-full">
                        <Image src={laterLifeBanner} alt="Banner" layout="responsive" width={16} height={9} />
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
                            <br />
                            <br />
                            {parseParagraph(t('paragraphFour'), t)}
                            <br />
                            <br />
                            {t('paragraphFive')}
                        </p>
                        <div className='m-7 relative self-center w-3xs'>
                            <div className="m-3">
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
                            {t('paragraphSix')}
                        </p>
                        <div className='m-9 relative self-center'>
                            <Image
                                src={lastSargent}
                                alt="Sargent portrait"
                                layout=""
                                width={400}
                                height={200}
                            />
                            <p className="m-2 text-center italic">
                                {t('fig2')}
                                <br />
                                * 1856             + 1925

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LaterLifePage;