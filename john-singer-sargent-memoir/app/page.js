import Link from 'next/link';
import homeBanner from './components/homeBanner.png';

export default function Home() {
  return (
<div>
  <section
    className="relative w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${homeBanner})` }} >
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="relative z-10 flex items-center justify-center w-full h-full text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Sua Mensagem Aqui</h1>
    </div>
  </section>
</div>

  );
}
