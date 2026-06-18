import { Author } from './types';

export const authors: Record<string, Author> = {
  detlef: {
    slug: 'detlef',
    name: 'Detlef Zeiler',
    role: 'Forscher und Autor',
    description:
      'Detlef Zeiler verbindet historische Recherche mit medialer Vermittlung. Seine Arbeiten umfassen lokale Geschichte Heidelbergs, internationale Projekte in Südamerika und der Karibik sowie pädagogische Konzepte zur Geschichtsvermittlung.',
    tags: ['Geschichte', 'Forschung', 'Medien', 'Heidelberg'],
    href: '/detlef',
    sections: [
      {
        title: 'Geschichte',
        href: '/detlef/geschichte',
        description: 'Historische Artikel und Abhandlungen',
        slug: 'geschichte',
      },
      {
        title: 'Projekte',
        href: '/detlef/projekte',
        description: 'Forschungsprojekte und lokale Geschichte',
        slug: 'projekte',
      },
      {
        title: 'Deutsch',
        href: '/detlef/deutsch',
        description: 'Aufsätze und Textinterpretationen',
        slug: 'deutsch',
      },
      {
        title: 'Medien',
        href: '/detlef/medien',
        description: 'Medienprojekte und Drehbücher',
        slug: 'medien',
      },
    ],
  },
  julian: {
    slug: 'julian',
    name: 'Julian Zeiler',
    role: 'IT & Technologie',
    description:
      'Julian Zeiler beschäftigt sich mit den Schnittstellen zwischen Technologie und Gesellschaft. Sein Fokus liegt auf der Analyse, wie Software-Entwicklung, Lizenzmodelle und technologische Innovationen unsere Arbeits- und Lebensweise beeinflussen.',
    tags: ['Technologie', 'Open Source', 'Digitale Gesellschaft', 'Innovation'],
    href: '/julian',
    sections: [
      {
        title: 'Artikel',
        href: '/julian/artikel',
        description: 'IT und Technologie Artikel',
        slug: 'artikel',
      },
    ],
  },
};
