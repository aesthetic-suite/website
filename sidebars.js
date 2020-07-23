/* eslint-disable sort-keys */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      items: ['index', 'prerequisites'],
    },
    {
      type: 'category',
      label: 'Design system',
      collapsed: false,
      items: [
        'design-system',
        'design-system/create',
        'design-system/config',
        {
          type: 'category',
          label: 'Configuration files',
          collapsed: true,
          items: [
            'design-system/config/brand',
            'design-system/config/language',
            'design-system/config/themes',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design tokens',
      collapsed: false,
      items: [
        'design-tokens',
        'design-tokens/compile',
        {
          type: 'category',
          label: 'Formats',
          collapsed: true,
          items: [
            'design-tokens/android',
            'design-tokens/ios',
            {
              type: 'category',
              label: 'Web',
              items: [
                'design-tokens/web/css-in-js',
                'design-tokens/web/css',
                'design-tokens/web/scss',
                'design-tokens/web/sass',
                'design-tokens/web/less',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: false,
      items: [
        'development',
        'development/configure',
        'development/themes',
        {
          type: 'category',
          label: 'Style sheets',
          items: [
            'development/style-sheets',
            'development/style-sheets/themes',
            'development/style-sheets/components',
          ],
        },
        'development/direction',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'React',
          href: '/docs/packages/react',
        },
      ],
    },
    {
      type: 'category',
      label: 'Packages',
      items: [
        {
          type: 'category',
          label: '@aesthetic/react',
          items: [
            'packages/react',
            'packages/react/setup',
            'packages/react/themes',
            'packages/react/styles',
            'packages/react/direction',
            'packages/react/api',
          ],
        },
        {
          type: 'category',
          label: '@aesthetic/sss',
          items: [
            'packages/sss',
            'packages/sss/spec',
            'packages/sss/local',
            'packages/sss/global',
            'packages/sss/api',
          ],
        },
        {
          type: 'category',
          label: '@aesthetic/style',
          items: [
            'packages/style',
            'packages/style/setup',
            'packages/style/concepts',
            'packages/style/options',
            'packages/style/ssr',
            'packages/style/testing',
            'packages/style/api',
          ],
        },
        {
          type: 'category',
          label: '@aesthetic/system',
          items: ['packages/system'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Roadmap',
          href: 'https://github.com/aesthetic-suite/framework/blob/master/ROADMAP.md',
        },
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/aesthetic-suite/framework/blob/master/CHANGELOG.md',
        },
        {
          type: 'link',
          label: 'Legacy docs',
          href: 'https://github.com/aesthetic-suite/framework/tree/legacy/docs',
        },
      ],
    },
  ],
};
