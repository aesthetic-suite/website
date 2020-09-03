/* eslint-disable sort-keys */

module.exports = {
  title: 'Aesthetic',
  tagline:
    'Aesthetic is an end-to-end design and development framework for declaring consistent visual styles across platforms, languages, projects, and teams.',
  url: 'https://aesthetic-suite.github.io',
  baseUrl: '/website/',
  favicon: 'img/favicon.ico',
  organizationName: 'aesthetic-suite',
  projectName: 'website',
  themeConfig: {
    navbar: {
      title: 'Aesthetic',
      logo: {
        alt: 'Aesthetic',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/aesthetic-suite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Design system',
              to: '/docs/design-system',
            },
            {
              label: 'Design tokens',
              to: '/docs/design-tokens',
            },
            {
              label: 'Development',
              to: '/docs/development',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            {
              label: 'React',
              to: '/docs/packages/react',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Roadmap',
              href: 'https://github.com/aesthetic-suite/framework/blob/master/ROADMAP.md',
            },
            {
              label: 'Changelog',
              href: 'https://github.com/aesthetic-suite/framework/blob/master/CHANGELOG.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aesthetic. Built with Docusaurus.`,
    },
    prism: {
      // additionalLanguages: ['sass'],
      // theme: require('prism-react-renderer/themes/nightOwl'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aesthetic-suite/website/edit/master',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/aesthetic-suite/website/edit/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
