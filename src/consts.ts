export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '< a generalists opinion >',
  DESCRIPTION:
    'josef can personal site',
  EMAIL: 'josef.can@outlook.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://josefcan.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'Research' },
  { href: 'https://cal.com/josefcan/30min', label: '30 min meeting' },
  { href: '/about', label: 'About' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/j0can', label: 'GitHub' },
  { href: 'josef.can@outlook.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
  { href: 'https://cal.com/josefcan/30min', label: 'Meeting' },
]
