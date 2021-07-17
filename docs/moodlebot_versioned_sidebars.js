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
    "Home",
    {
      type: 'category',
      label: 'Setup your bot',
      items: [
        'Setup - preparation',
        'Setup - with docker',
        'Setup - with heroku and mongodb atlas',
      ],
    },
    "What is inside env",
  ],
};
