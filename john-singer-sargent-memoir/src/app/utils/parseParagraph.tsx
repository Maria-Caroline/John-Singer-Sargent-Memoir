import React from 'react';
import { ModalInfo, ModalInfoProps } from '../[locale]/components/modal-info';

const infoWords: Record<string, Omit<ModalInfoProps, 'description'>> = {
    technique: {
        word: 'technique',
        image: '/modals/technique.png',
    },
    portrait: {
        word: 'portrait',
        image: '/modals/portrait.png',
    },
    portraiture: {
        word: 'portraiture',
        image: '/modals/portrait.png',
    },
    landscape: {
        word: 'landscape',
        image: '/modals/landscape.png',
    },
    paysages: {
        word: 'paysages',
        image: '/modals/landscape.png',
    },
    oil: {
        word: 'oil',
        image: '/modals/oil.png',
    },
    huile: {
        word: 'oil',
        image: '/modals/oil.png',
    },
    watercolors: {
        word: 'watercolors',
        image: '/modals/wtc.png',
    },
    aquarelles: {
        word: 'aquarelles',
        image: '/modals/wtc.png',
    },
    aquarelle: {
        word: 'aquarelles',
        image: '/modals/wtc.png',
    },
    charcoal: {
        word: 'charcoal',
        image: '/modals/master.png',
    },
    charbon: {
        word: 'charbon',
        image: '/modals/master.png',
    },
    Impressionist: {
        word: 'Impressionist',
        image: '/modals/master.png',
    },
    esquisses: {
        word: 'esquisses',
        image: '/modals/skt.png',
    },
    sketches: {
        word: 'sketches',
        image: '/modals/skt.png',
    },
    perspective: {
        word: 'perspective',
        image: '/modals/master.png',
    },
    anatomie: {
        word: 'anatomie',
        image: '/modals/master.png',
    },
    anatomy: {
        word: 'anatomy',
        image: '/modals/skt.png',
    },
    carnets: {
        word: 'carnets',
        image: '/modals/skt.png',
    },
    sketchbooks: {
        word: 'carnets',
        image: '/modals/skt.png',
    },
    impressionnistes: {
        word: 'carnets',
        image: '/modals/skt.png',
    },
};

export function parseParagraph(text: string, t: (key: string) => string): React.ReactNode[] {
  const parts = text.split(/(\[.*?\])/g);

  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]/);
    if (match) {
      const key = match[1];
      const info = infoWords[key];
      if (info) {
        return (
          <ModalInfo
            key={i}
            word={info.word}
            image={info.image}
            description={t(`modals.${key}.description`)}
          />
        );
      }
      return match[1]; // fallback
    }
    return part;
  });
}

