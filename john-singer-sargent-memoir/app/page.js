import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <h2>John Singer Sargent: A Memoir</h2>
      </header>

      <nav>
        <a href="#earlylife">Early Life</a>
        <a href="#career">Career</a>
        <a href="#famousWorks">Famous Works</a>
        <a href="#laterLife">Later Life</a>
      </nav>

      <main>
        <section id="banner"></section>
        <section id="earlylife">
          <h3>Early Life</h3>
          <p>
            Sargent was a descendant of Epes Sargent, a colonial military leader and jurist. Before John Singer
            Sargent&apos;s birth, his father, FitzWilliam (b. 1820 in Gloucester, Massachusetts), was an eye surgeon at
            the Wills Eye Hospital in Philadelphia from 1844 to 1854. After John&apos;s older sister died at the age of
            two, his mother, Mary Newbold Sargent (n&eacute;e Singer, 1826-1906), suffered a breakdown, and the couple
            decided to go abroad to recover. They remained nomadic expatriates for the rest of their lives.
          </p>
          <p>
            Although based in Paris, Sargent&apos;s parents moved regularly, spending seasons at the sea and at mountain
            resorts in France, Germany, Italy, and Switzerland.
          </p>
          <p>
            While Mary was pregnant, they stopped in Florence, Tuscany, because of a cholera epidemic. Sargent was
            born there in 1856. A year later, his sister Mary was born. After her birth, FitzWilliam reluctantly
            resigned his post in Philadelphia and accepted his wife&apos;s request to remain abroad.
          </p>
        </section>

        <section id="career">
          <h3>Career</h3>
          <p>
            In 1879 at the age of 23, Sargent painted a portrait of his teacher Carolus-Duran; the virtuoso effort met
            with public approval and announced the direction his mature work would take. Its showing at the Paris Salon
            was both a tribute to his teacher and an advertisement for portrait commissions.
          </p>
          <p>
            After leaving Carolus-Duran&apos;s atelier, Sargent visited Spain. There he studied the paintings of
            Vel&aacute;zquez with a passion, absorbing the master&apos;s technique, and in his travels gathered ideas for
            future works. He was entranced with Spanish music and dance. The trip also re-awakened his own talent for
            music, which found visual expression in his early masterpiece <i>El Jaleo</i> (1882).
          </p>
          <p>
            <i>Venetian Onion Seller</i>, 1880-1882, Thyssen-Bornemisza Museum, Madrid.
          </p>
          <p>
            Upon his return to Paris, Sargent quickly received several portrait commissions. His career was launched.
            He immediately demonstrated the concentration and stamina that enabled him to paint with workman-like
            steadiness for the next twenty-five years.
          </p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
