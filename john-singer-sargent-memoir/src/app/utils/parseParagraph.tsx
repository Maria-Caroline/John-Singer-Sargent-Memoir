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
  landscape: {
    word: 'landscape',
    image: '/modals/landscape.png',
  },
  oil: {
    word: 'oil',
    image: '/modals/master.png',
  },
  watercolors: {
    word: 'watercolors',
    image: '/modals/master.png',
  },
  charcoal: {
    word: 'charcoal',
    image: '/modals/master.png',
  },
  Impressionist: {
    word: 'Impressionist',
    image: '/modals/master.png',
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

