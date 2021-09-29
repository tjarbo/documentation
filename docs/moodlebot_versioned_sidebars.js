/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    "home",
    {
      type: 'category',
      label: 'Getting started',
      items: [
        'getting-started/preparation',
        'getting-started/deploy-to-heroku',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
      ],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      items: [
        'advanced-guides/configure-via-env',
        'advanced-guides/what-is-inside-env',
        'advanced-guides/use-mongodb-atlas',
      ],
    },
    {
      type: 'category',
      label: 'Let\'s contribute',
      items: [
        'contribution/code',
        'contribution/translations',
      ],
    },
    {
      type: 'link',
      label: 'FAQ',
      href: 'https://github.com/tjarbo/discord-moodle-bot/discussions/categories/q-a',
    },
    {
      type: 'link',
      label: 'Matrix Channel',
      href: '',
    }
  ],
};
