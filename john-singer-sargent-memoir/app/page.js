import Link from 'next/link';
import homeBanner from "./images/homeBanner.png"
import sargentSign from "./images/sargentSign.png"
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <div className="w-full">
        <section className="relative w-full">
          <Image src={homeBanner} alt="Banner" layout="responsive" width={16} height={9} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-center text-3xl">“You can't do sketches enough.
              <br />
              Sketch everything and keep your curiosity fresh.”
            </p>
            <p className="text-center text-2xl mt-4 font-[Playfair]">— John Singer Sargent</p>
          </div>
        </section>
      </div>
      <div className='flex justify-center text-brown'>
        <div className='m-9 flex justify-center max-w-5xl flex-col gap-7'>
          <h1 className='text-3xl font-medium'>Summary</h1>
          <p className='font-[Playfair] text-xl text-justify'>
            John Singer Sargent was a portrait painter, landscape painter, and watercolorist. Over the course of his career, he created approximately 900 oil paintings and over 2,000 watercolors, as well as numerous sketches and charcoal drawings.
            <br />
            <br />
            John Singer Sargent was born in Florence, Italy, the son of American immigrants. He lived in Europe for much of his life and became one of the greatest portraitists and muralists of his time. With the technical mastery and ingenuity of his work, he brilliantly portrayed his subjects, emphasizing their aristocratic refinement and haughtiness.
          </p>
          <div className='m-15 self-center h-px w-md bg-brown'></div>
          <div>
            <p className='text-center text-xl font-[Playfair]'> Discover the timeless elegance of John Singer Sargent's iconic works, from grand portraits to breathtaking watercolors, and learn more about the life of the artist who redefined portraiture.</p>
          </div>
          <div className='m-15 relative self-center w-3xs'>
            <Image
              src={sargentSign}
              alt="Banner"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
