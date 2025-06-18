'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'
import { parseParagraph } from '../utils/parseParagraph';
import homeBanner from '../../../public/home-banner.png'

export default function HomePage() {
  const { theme } = useTheme()
  const imgSrc = theme === 'dark' ? '/sargent-sign-dark.png' : '/sargent-sign-light.png';

  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="w-full">
        <section className="relative w-full">
          <Image src={homeBanner} alt="Banner" layout="responsive" width={16} height={9} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
            <h1 className="text-center text-3xl font-[Montserrat]">&quot;{t('quoteOne')}
              <br/>
              {t('quoteTwo')}&quot;
            </h1>
            <p className="text-center text-2xl mt-4 ">— John Singer Sargent</p>
          </div>
        </section>
      </div>
      <div className='flex justify-center'>
        <div className='m-10 flex justify-center max-w-5xl flex-col gap-7'>
          <h1 className='text-3xl font-semibold font-[Montserrat] dark:text-white'>{t('title')}</h1>
          <div className='text-xl text-justify'>
            {parseParagraph(t('paragraphOne'), t)}
            <br />
            <br />
            {t('paragraphTwo')}
          </div>
          <div className='m-15 self-center h-px w-md bg-[var(--color-foreground)]'></div>
          <div>
            <p className='text-center text-xl'> {t('paragraphThree')}</p>
          </div>
          <div className='m-15 relative self-center w-3xs'>
            <Image
              src={imgSrc}
              alt="John Singer Sargent's Sign"
              layout="responsive"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
