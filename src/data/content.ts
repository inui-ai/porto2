export type Project = {
  name: string
  year: string
  client: string
  media: { type: 'image' | 'video'; src: string }
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  description: string
}

export type Service = {
  num: string
  title: string
  description: string
  tags: string[]
}

export type Award = {
  year: string
  title: string
  org: string
}

export type Faq = { q: string; a: string }

export type Article = { title: string; date: string; image: string }

export const person = {
  name: 'Example',
  role: 'lorem ipsum dolor sit amet',
  based: 'Lorem ipsum dolor',
  blurb:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  email: 'lorem@example.com',
  timezone: 'Europe/Madrid',
}

export const logos = ['Lorem', 'Ipsum', 'Lorem Ipsum', 'Dolor', 'Sit Amet', 'Consectetur', 'Adipiscing']

export const projects: Project[] = [
  { name: 'Lorem Ipsum', year: '2026', client: 'Lorem ipsum', media: { type: 'image', src: '/images/img-1.jpg' } },
  { name: 'Lorem Ipsum', year: '2025', client: 'Dolor sit', media: { type: 'video', src: '/videos/video-1.mp4' } },
  { name: 'Lorem Ipsum', year: '2025', client: 'Amet elit', media: { type: 'video', src: '/videos/video-2.mp4' } },
  { name: 'Lorem Ipsum', year: '2026', client: 'Sed tempor', media: { type: 'image', src: '/images/img-2.jpg' } },
  { name: 'Lorem Ipsum', year: '2026', client: 'Incididunt', media: { type: 'image', src: '/images/img-19.jpg' } },
  { name: 'Lorem Ipsum', year: '2025', client: 'Magna aliqua', media: { type: 'image', src: '/images/img-3.jpg' } },
]

export const stats = [
  { value: '11', suffix: '+', label: 'Lorem ipsum dolor sit amet consectetur' },
  { value: '80', suffix: '+', label: 'Adipiscing elit sed do eiusmod tempor' },
  { value: '40', suffix: '%', label: 'Incididunt ut labore et dolore magna' },
  { value: '95', suffix: '%', label: 'Aliqua enim ad minim veniam quis' },
]

export const about = {
  statement:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
  paragraphs: [
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, duis aute irure dolor in reprehenderit.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.',
  ],
  rating: '4,9/5',
  trusted: 'Lorem ipsum dolor sit amet.',
  localLabel: 'Lorem ipsum:',
}

export const experiences: Experience[] = [
  {
    role: 'Lorem ipsum dolor',
    company: 'Lorem Ipsum',
    location: 'Lorem, Ipsum',
    period: '2021 — Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
  },
  {
    role: 'Lorem ipsum',
    company: 'Lorem Ipsum',
    location: 'Dolor, Sit',
    period: '2018 — 2021',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
  },
  {
    role: 'Lorem dolor amet',
    company: 'Lorem Ipsum',
    location: 'Amet, Elit',
    period: '2015 — 2018',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore.',
  },
  {
    role: 'Lorem ipsum',
    company: 'Lorem Ipsum',
    location: 'Tempor, Magna',
    period: '2013 — 2015',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.',
  },
]

export const services: Service[] = [
  {
    num: '01',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur elit', 'Tempor incididunt', 'Magna aliqua'],
  },
  {
    num: '02',
    title: 'Lorem ipsum amet',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Lorem ipsum', 'Sed do eiusmod', 'Labore dolore', 'Aliqua enim', 'Minim veniam'],
  },
  {
    num: '03',
    title: 'Lorem incididunt',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['Lorem ipsum', 'Excepteur sint', 'Occaecat cupidatat', 'Non proident', 'Sunt in culpa'],
  },
  {
    num: '04',
    title: 'Lorem magna aliqua',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    tags: ['Lorem ipsum', 'Totam rem', 'Aperiam eaque', 'Ipsa quae', 'Ab illo'],
  },
  {
    num: '05',
    title: 'Lorem dolor sit',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    tags: ['Lorem ipsum', 'Neque porro', 'Quisquam est', 'Qui dolorem', 'Ipsum quia'],
  },
]

export const awards: Award[] = [
  { year: '2026', title: 'Lorem ipsum dolor', org: 'Lorem Ipsum' },
  { year: '2025', title: 'Sit amet consectetur', org: 'Lorem Ipsum' },
  { year: '2024', title: 'Adipiscing elit — Lorem', org: 'Lorem Ipsum' },
  { year: '2023', title: 'Sed do eiusmod tempor', org: 'Lorem Ipsum' },
  { year: '2022', title: 'Incididunt ut labore', org: 'Lorem Ipsum' },
]

export const faqs: Faq[] = [
  {
    q: 'Lorem ipsum dolor sit amet?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    q: 'Consectetur adipiscing elit?',
    a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    q: 'Sed do eiusmod tempor incididunt?',
    a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    q: 'Ut labore et dolore magna aliqua?',
    a: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    q: 'Quis nostrud exercitation ullamco?',
    a: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
  },
  {
    q: 'Duis aute irure dolor in reprehenderit?',
    a: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    q: 'Excepteur sint occaecat cupidatat?',
    a: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam.',
  },
]

export const articles: Article[] = [
  { title: 'Lorem ipsum dolor sit amet', date: '21 Agu 2026', image: '/images/img-16.jpg' },
  { title: 'Consectetur adipiscing elit sed', date: '18 Agu 2026', image: '/images/img-17.jpg' },
  { title: 'Tempor incididunt ut labore', date: '14 Agu 2026', image: '/images/img-18.jpg' },
]

export const gallery = ['/images/img-9.jpg', '/images/img-10.jpg', '/images/img-11.jpg', '/images/img-15.jpg']
