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
      label: 'Setup your bot',
      items: [
        'setup-preparation',
        'setup-with-docker',
        'setup-with-heroku-and-mongodb-atlas',
      ],
    },
    "what-is-inside-env",
  ],
};
