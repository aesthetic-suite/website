declare module '*.module.css' {
  interface CSS { [key: string]: string }

  const classes: CSS;
  export default classes;
}

declare module '@docusaurus/Link' {
  import Link from '@docusaurus/core/lib/client/exports/Link';

  export default Link;
}

declare module '@docusaurus/useBaseUrl' {
  import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';

  export default useBaseUrl;
}


declare module '@docusaurus/useDocusaurusContext' {
  import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';

  export default useDocusaurusContext;
}

declare module '@theme/*';

declare module 'webpack-merge' {
  export type MergeStrategy = any;
}
