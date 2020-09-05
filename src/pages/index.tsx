import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TSX_FORMAT, CSS_FORMAT, SCSS_FORMAT, LESS_FORMAT } from '../content/tokens';
import { REACT_EXAMPLE } from '../content/integrations';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const siteConfig = context.siteConfig!;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              // @ts-expect-error
              className={clsx('button button--secondary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/')}
            >
              Get started
            </Link>

            <iframe
              src="https://ghbtns.com/github-btn.html?user=aesthetic-suite&repo=framework&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              title="GitHub"
            />
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8">
                <h2>Fluent design system</h2>

                <p>
                  With everything from typography to elevation, spacing, motion, and more! Create
                  and manage a thorough design system with a strict and centralized YAML
                  configuration — easy for both designers and developers to maintain.
                </p>

                <p className={styles.muted}>Figma support coming soon!</p>
              </div>

              <div className="col col--4" />
            </div>

            <div className={clsx('row', styles.sectionSpacer)}>
              <div className="col col--4" />

              <div className="col col--8 text--right">
                <h2>Expressive themes</h2>

                <p>
                  Whether for brand or accessibility purposes, compose your design system around
                  multiple themes that express unique colors, palettes, and interactive states.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAltColor)}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>Scalable design tokens</h2>

                <p>
                  Compile your design system configuration to consistent, reusable, and scalable
                  design tokens for Android*, iOS*, and Web platforms, and popular technologies such
                  as CSS, CSS-in-JS, SCSS, and many more.
                </p>

                <p>
                  Design tokens are engineered for optimal developer ergonomics by providing type
                  safety, autocompletion, and documentation.
                </p>

                <p className={styles.muted}>* Mobile platforms coming soon</p>
              </div>

              <div className="col col--6 code-block--condensed">
                <Tabs
                  defaultValue="tsx"
                  values={[
                    { label: 'JS/TS', value: 'tsx' },
                    { label: 'CSS', value: 'css' },
                    { label: 'SCSS', value: 'scss' },
                    { label: 'Less', value: 'less' },
                    { label: '...', value: 'other' },
                  ]}
                >
                  <TabItem value="tsx">
                    <CodeBlock className="language-ts">{TSX_FORMAT}</CodeBlock>
                  </TabItem>

                  <TabItem value="css">
                    <CodeBlock className="language-css">{CSS_FORMAT}</CodeBlock>
                  </TabItem>

                  <TabItem value="scss">
                    <CodeBlock className="language-scss">{SCSS_FORMAT}</CodeBlock>
                  </TabItem>

                  <TabItem value="less">
                    <CodeBlock className="language-less">{LESS_FORMAT}</CodeBlock>
                  </TabItem>

                  <TabItem value="other">
                    <div className="alert alert--secondary" role="alert">
                      And many more supported or to come in the future!
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6 code-block--condensed">
                <CodeBlock className="language-tsx">{REACT_EXAMPLE}</CodeBlock>
              </div>

              <div className="col col--6">
                <h2>Powerful APIs</h2>

                <p>
                  Easily and succinctly style your components with our powerful battle-tested and
                  high-performant APIs. We handle the heavy lifting, you focus on features that
                  matter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
