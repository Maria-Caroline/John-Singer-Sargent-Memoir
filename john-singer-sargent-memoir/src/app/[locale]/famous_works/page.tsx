'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'

import { parseParagraph } from '../../utils/parseParagraph';
import careerBanner from '../../../../public/careerBanner.png'
import madameX from './../../../../public/madameX.png'
import sargentsAtelier from './../../../../public/sargentsAtelier.png'

const FamousWorksPage: React.FC = () => {
     const { theme } = useTheme()


    const t = useTranslations('FamousWorks');
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
                
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FamousWorksPage;