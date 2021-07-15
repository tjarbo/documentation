const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tjarbo\'s Documentation',
  tagline: 'Documentation of tjarbo\'s projects',
  url: 'https://docs.tjarbo.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tjarbo',
  projectName: 'documentation',
  themes: ['@docusaurus/theme-classic'],
  themeConfig: {
    navbar: {
      title: 'tjarbo\'s docs',
      logo: {
        alt: 'Feather Icon Book',
        src: 'img/book-2px.svg',
      },
      items: [
        {
          to: 'moodle-notification-service/README',
          position: 'left',
          label: 'Moodle Notification Service',
        },
        {
          href: 'https://twitter.com/tjarbo_dev',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/tjarbo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'moodlebot',
        routeBasePath: 'moodle-notification-service',
        path: 'moodlebot',
        sidebarPath: require.resolve('./moodlebot_versioned_sidebars.js'),
        editUrl: 'https://example.com',
        disableVersioning: true,
      },
    ],
    [ 
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/*.test.{js,ts}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
        remarkPlugins: [],
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
      },
    ],
  ],
};
