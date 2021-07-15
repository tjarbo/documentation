const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tjarbo\'s documentation',
  tagline: 'Documentation of my projects',
  url: 'https://docs.tjarbo.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/book-2px.svg',
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
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} A tjarbo project. Built with Docusaurus. Icon from feathericons.com`,
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
        editUrl: 'https://github.com/tjarbo/documentation/tree/master/docs/moodlebot',
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
