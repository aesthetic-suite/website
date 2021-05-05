/* eslint-disable sort-keys */

const config = require('./docusaurus.config');

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
              label: 'Native',
              items: ['design-tokens/native/ts', 'design-tokens/native/tsx'],
            },
            {
              type: 'category',
              label: 'Web',
              items: [
                'design-tokens/web/ts',
                'design-tokens/web/tsx',
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
        {
          type: 'category',
          label: 'CSS-in-JS',
          items: [
            'dev/css-in-js/setup',
            'dev/css-in-js/configure',
            'dev/css-in-js/themes',
            {
              type: 'category',
              label: 'Style sheets',
              items: [
                'dev/css-in-js/style-sheets',
                'dev/css-in-js/style-sheets/themes',
                'dev/css-in-js/style-sheets/components',
              ],
            },
            'dev/css-in-js/direction',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'React',
          items: [
            'integrations/react',
            'integrations/react/setup',
            'integrations/react/themes',
            'integrations/react/styles',
            'integrations/react/styled',
            'integrations/react/direction',
            'integrations/react/ssr',
            'integrations/react/api',
          ],
        },
        {
          type: 'category',
          label: 'React Native',
          items: [
            'integrations/react-native',
            'integrations/react-native/setup',
            'integrations/react-native/themes',
            'integrations/react-native/styles',
            'integrations/react-native/styled',
            'integrations/react-native/direction',
            'integrations/react-native/api',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Packages',
      items: [
        {
          type: 'link',
          label: '@aesthetic/react',
          href: `${config.baseUrl}docs/integrations/react`,
        },
        {
          type: 'link',
          label: '@aesthetic/react-native',
          href: `${config.baseUrl}docs/integrations/react-native`,
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
          href: 'https://github.com/aesthetic-suite/framework/tree/legacy/docs/legacy',
        },
      ],
    },
  ],
};
