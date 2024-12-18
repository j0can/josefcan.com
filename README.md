## josefcan.com

Personal website to keep web dev intact (built with astro + typescript)

## Getting Started

1. Hit &ldquo;Use this template&rdquo;, the big green button on the top right, to create a new repository in your own GitHub account with this template.

2. Clone the repository:

   ```bash
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
   cd [YOUR_REPO_NAME]
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:1234` to get started. The following commands are also available:

   | Command            | Description                                                     |
   | ------------------ | --------------------------------------------------------------- |
   | `npm run start`    | Alias for `npm run dev`                                         |
   | `npm run build`    | Run type checking and build the project                         |
   | `npm run preview`  | Previews the built project                                      |
   | `npm run astro`    | Run Astro CLI commands                                          |
   | `npm run prettier` | Blanket format all files using [Prettier](https://prettier.io/) |

## Customization

Edit the `CNAME` file to update your site's domain.

Edit the `src/consts.ts` file to update your site's metadata, navigation links, and social links.

```typescript
export const SITE: Site = {
  TITLE: 'john doe',
  DESCRIPTION:
    'add your description',
  EMAIL: 'john@doe.dev',
  NUM_POSTS_ON_HOMEPAGE: 2,
  SITEURL: 'https:/johndoe.dev',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/johndoe', label: 'GitHub' },
  { href: 'https://twitter.com/johndoe', label: 'Twitter' },
  { href: 'john@doe.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
```