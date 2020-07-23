/* eslint-disable sort-keys */

module.exports = {
  title: 'Aesthetic',
  tagline: 'An end-to-end styling and design suite for Web, Android, and iOS.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'aesthetic-suite', // Usually your GitHub org/user name.
  projectName: 'framework', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Aesthetic',
      logo: {
        alt: 'Aesthetic suite',
        src: 'img/logo.svg',
      },
      links: [
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
          title: 'How to',
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
          homePageId: 'index',
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
