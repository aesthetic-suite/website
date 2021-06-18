/* eslint-disable sort-keys */

const pkgs = [
  'addon-direction',
  'addon-properties',
  'addon-vendor',
  'cli',
  'compiler',
  'core',
  'core-react',
  'react',
  'react-native',
  'style',
  'system',
  'types',
  'utils',
  // eslint-disable-next-line
].map((name) => require(`@aesthetic/${name}/package.json`));

module.exports = {
  title: 'Aesthetic',
  tagline:
    'Aesthetic is an end-to-end design system and development framework for declaring consistent visual styles across platforms, languages, projects, and teams.',
  url: 'https://aestheticsuite.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
  organizationName: 'aesthetic-suite',
  projectName: 'website',
  themeConfig: {
    algolia: { apiKey: 'e69c3e49d282a965851e8e885091e26b', indexName: 'aestheticsuite' },
    navbar: {
      title: 'Aesthetic',
      logo: {
        alt: 'Aesthetic',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'BETA',
          position: 'left',
          items: pkgs.map((pkg) => ({
            label: `v${pkg.version} · ${pkg.name.split('/')[1]}`,
            href: `https://www.npmjs.com/package/${pkg.name}`,
          })),
        },
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/react',
          activeBasePath: 'docs/react',
          label: 'React',
          position: 'left',
        },
        {
          to: 'docs/react-native',
          activeBasePath: 'docs/react-native',
          label: 'React Native',
          position: 'left',
        },
        {
          label: 'Packages',
          position: 'left',
          items: [
            {
              label: 'Design system',
              to: '/docs/packages/system',
            },
            {
              label: 'CSS-in-JS engine',
              to: '/docs/packages/style',
            },
          ],
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
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'CSS-in-JS',
              to: '/docs/dev/css-in-js',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            {
              label: 'React',
              to: '/docs/react',
            },
            {
              label: 'React Native',
              to: '/docs/react-native',
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
      copyright: `Copyright © ${new Date().getFullYear()} Aesthetic. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Icon by <a href="https://thenounproject.com/tatiana.selicka/collection/triangle/?i=344801" target="_blank">Tatiana Selicka (Noun Project)</a>.`,
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
