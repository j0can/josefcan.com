import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "josefcan.com",
  DESCRIPTION: "josefs website.",
  EMAIL: "josef.can@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const POSTS: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION:
    "some small researching that i would like to note down.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/j0can",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/josefcan",
  },
];
