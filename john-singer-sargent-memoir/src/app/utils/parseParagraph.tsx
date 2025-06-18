import React from 'react';
import { ModalInfo, ModalInfoProps } from '../[locale]/components/modal-info';

const infoWords: Record<string, Omit<ModalInfoProps, 'description'>> = {
    technique: {
        word: 'technique'
    },
    portrait: {
        word: 'portrait'
    },
    portraiture: {
        word: 'portraiture'
    },
    landscape: {
        word: 'landscape'
    },
    paysages: {
        word: 'paysages'
    },
    oil: {
        word: 'oil'
    },
    huile: {
        word: 'oil'
    },
    watercolors: {
        word: 'watercolors'
    },
    aquarelles: {
        word: 'aquarelles'
    },
    aquarelle: {
        word: 'aquarelles'
    },
    charcoal: {
        word: 'charcoal'
    },
    charbon: {
        word: 'charbon'
    },
    Impressionist: {
        word: 'Impressionist'
    },
    esquisses: {
        word: 'esquisses'
    },
    sketches: {
        word: 'sketches'
    },
    perspective: {
        word: 'perspective'
    },
    anatomie: {
        word: 'anatomie'
    },
    anatomy: {
        word: 'anatomy'
    },
    carnets: {
        word: 'carnets'
    },
    sketchbooks: {
        word: 'carnets'
    },
    impressionnistes: {
        word: 'carnets'
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
            description={t(`modals.${key}.description`)}
          />
        );
      }
      return match[1]; // fallback
    }
    return part;
  });
}

