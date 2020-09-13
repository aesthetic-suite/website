/* eslint-disable sort-keys */

const pkgs = [
  'cli',
  'compiler',
  'core',
  'react',
  'sss',
  'style',
  'system',
  'types',
  'utils',
  // eslint-disable-next-line
].map((name) => require(`@aesthetic/${name}/package.json`));

module.exports = {
  title: 'Aesthetic',
  tagline:
    'Aesthetic is an end-to-end design and development framework for declaring consistent visual styles across platforms, languages, projects, and teams.',
  url: 'https://aestheticsuite.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.svg',
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
          label: 'ALPHA',
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
          to: 'docs/integrations/react',
          activeBasePath: 'docs/integrations/react',
          label: 'React',
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
              label: 'CSS-in-JS style engine',
              to: '/docs/packages/style',
            },
            {
              label: 'Structured style sheets',
              to: '/docs/packages/sss',
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
              to: '/docs/integrations/react',
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
