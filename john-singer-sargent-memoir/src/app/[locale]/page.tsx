'use client'
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
const homeBanner = '/home-banner.png';
import { useTheme } from 'next-themes'

export default function HomePage() {
  const { resolvedTheme } = useTheme()
  let sign
  switch (resolvedTheme) {
    case 'light':
      sign = '/sargent-sign-light.png'
      break
    case 'dark':
      sign = '/sargent-sign-dark.png'
      break
    default:
      sign = '/sargent-sign-dark.png'
      break
  }

  const t = useTranslations('HomePage');
  return (
    <div>
      <div className="w-full">
        <section className="relative w-full">
          <Image src={homeBanner} alt="Banner" layout="responsive" width={16} height={9} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
            <h1 className="text-center text-3xl font-[Montserrat]">"{t('quoteOne')}
              <br/>
              {t('quoteTwo')}"
            </h1>
            <p className="text-center text-2xl mt-4 ">— John Singer Sargent</p>
          </div>
        </section>
      </div>
      <div className='flex justify-center text-brown'>
        <div className='m-9 flex justify-center max-w-5xl flex-col gap-7'>
          <h1 className='text-3xl font-semibold  font-[Montserrat] dark:text-white'>{t('title')}</h1>
          <p className='text-xl text-justify'>
          {t('paragraphOne')}
            <br />
            <br />
            {t('paragraphTwo')}
          </p>
          <div className='m-15 self-center h-px w-md bg-brown'></div>
          <div>
            <p className='text-center text-xl'> {t('paragraphThree')}</p>
          </div>
          <div className='m-15 relative self-center w-3xs'>
            <Image
              src={sign}
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
