import { NavEntry } from './types';

export const mainNavigation: NavEntry[] = [
  {
    title: 'Detlef Zeiler',
    href: '/detlef',
    description: 'Artikel und Projekte von Detlef Zeiler',
    children: [
      { title: 'Geschichte', href: '/detlef/geschichte', description: 'Historische Artikel' },
      {
        title: 'Projekte',
        href: '/detlef/projekte',
        description: 'Forschungsprojekte',
        children: [
          {
            title: 'Heidelberg im Mittelalter',
            href: '/detlef/projekte/heidelberg-im-mittelalter',
          },
          {
            title: 'Die Elsenz und der Kraichgau',
            href: '/detlef/projekte/die-elsenz-und-der-kraichgau',
          },
          { title: 'Heiligenberg', href: '/detlef/projekte/heiligenberg' },
          { title: 'Neuenheim', href: '/detlef/projekte/neuenheim' },
          {
            title: 'Dritte Gewalt – Strafvollzug',
            href: '/detlef/projekte/dritte-gewalt-strafvollzug',
          },
          {
            title: 'Heidelberger Schulgeschichten',
            href: '/detlef/projekte/heidelberger-schulgeschichten',
          },
          {
            title: 'Old Providence – Die Insel Providencia',
            href: '/detlef/projekte/old-providence-die-insel-providencia',
          },
        ],
      },
      {
        title: 'Deutsch',
        href: '/detlef/deutsch',
        description: 'Deutsch-Aufsätze und Texte',
        children: [
          { title: 'Textinterpretation', href: '/detlef/deutsch/textinterpretation' },
          { title: 'Essay-Themen', href: '/detlef/deutsch/essay-themen' },
          { title: 'Fremdenfeindlichkeit', href: '/detlef/deutsch/fremdenfeindlichkeit' },
          {
            title: 'Needful Things',
            href: '/detlef/deutsch/needful-things---in-einer-kleinen-stadt',
          },
        ],
      },
      { title: 'Medien', href: '/detlef/medien', description: 'Medienprojekte' },
    ],
  },
  {
    title: 'Julian Zeiler',
    href: '/julian',
    description: 'Artikel und Projekte von Julian Zeiler',
    children: [
      { title: 'Artikel', href: '/julian/artikel', description: 'IT und Technologie Artikel' },
    ],
  },
];

export const footerNavigation = {
  main: [
    { title: 'Detlef Zeiler', href: '/detlef' },
    { title: 'Julian Zeiler', href: '/julian' },
    { title: 'Impressum', href: '/impressum' },
  ],
};
