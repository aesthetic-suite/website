// eslint-disable-next-line no-use-before-define
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import { REACT_HOOKS_EXAMPLE, REACT_STYLED_EXAMPLE } from '../content/integrations';
import {
	CSS_FORMAT,
	LESS_FORMAT,
	SCSS_FORMAT,
	TS_FORMAT,
	TSX_FORMAT,
	YAML_FIXED_CONFIG,
	YAML_SCALED_CONFIG,
} from '../content/tokens';
import styles from './styles.module.css';

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig } = context;

	return (
		<Layout description={siteConfig.tagline} title="A design system and styling solution">
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>

					<div className={styles.buttons}>
						<Link
							className={clsx('button button--secondary button--lg', styles.getStarted)}
							to={useBaseUrl('docs/')}
						>
							Get started
						</Link>

						<iframe
							frameBorder="0"
							scrolling="0"
							src="https://ghbtns.com/github-btn.html?user=aesthetic-suite&repo=framework&type=star&count=true&size=large"
							title="GitHub"
						/>
					</div>
				</div>
			</header>

			<main>
				<section className={styles.section}>
					<div className="container">
						<div className="row">
							<div className="col col--6">
								<h2>Fluent design system</h2>

								<p>
									With everything from typography to elevation, spacing, motion, and more! Create
									and manage a robust design system through a strict and centralized YAML
									configuration. Easy for both designers and developers to maintain.
								</p>

								<p>
									Do you want to maintain a system with explicit parameters? Or do you want
									automatic parameters based on{' '}
									<a href="https://www.modularscale.com">modular scale</a>? Well Aesthetic supports
									both patterns, either separate or together!
								</p>

								<p className={styles.muted}>Figma support coming soon!</p>

								<br />
								<br />

								<h2>Expressive themes</h2>

								<p>
									Whether for brand or accessibility purposes, compose your design system around
									multiple themes that express unique colors, palettes, and interactive states.
								</p>
							</div>

							<div className="col col--6 code-block--condensed">
								<Tabs
									defaultValue="fixed"
									values={[
										{ label: 'Fixed', value: 'fixed' },
										{ label: 'Scaled', value: 'scaled' },
									]}
								>
									<TabItem value="fixed">
										<CodeBlock className="language-yaml">{YAML_FIXED_CONFIG}</CodeBlock>
									</TabItem>

									<TabItem value="scaled">
										<CodeBlock className="language-yaml">{YAML_SCALED_CONFIG}</CodeBlock>
									</TabItem>
								</Tabs>
							</div>
						</div>
					</div>
				</section>

				<section className={clsx(styles.section, styles.sectionAltColor)}>
					<div className="container">
						<div className="row">
							<div className="col col--6 code-block--condensed">
								<Tabs
									defaultValue="ts"
									values={[
										{ label: 'JS/TS', value: 'ts' },
										{ label: 'CSS-in-JS/TS', value: 'tsx' },
										{ label: 'CSS', value: 'css' },
										{ label: 'SCSS', value: 'scss' },
										{ label: 'Less', value: 'less' },
										{ label: '...', value: 'other' },
									]}
								>
									<TabItem value="ts">
										<CodeBlock className="language-ts">{TS_FORMAT}</CodeBlock>
									</TabItem>

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
											And many more supported formats to come in the future!
										</div>
									</TabItem>
								</Tabs>
							</div>

							<div className="col col--6">
								<h2>Scalable design tokens</h2>

								<p>
									Compile your design system configuration to consistent, reusable, and scalable
									design tokens for Android*, iOS*, React Native, and Web platforms, and popular
									technologies such as JavaScript, TypeScript, CSS-in-JS, CSS, SCSS, and many more.
								</p>

								<p>
									Design tokens are engineered for optimal developer ergonomics by providing type
									safety, autocompletion, and documentation.
								</p>

								<p className={styles.muted}>* Mobile platforms coming soon!</p>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.section}>
					<div className="container">
						<div className="row">
							<div className="col col--6">
								<h2>Powerful APIs</h2>

								<p>
									Easily and succinctly style your components with our powerful battle-tested and{' '}
									<a href="https://github.com/aesthetic-suite/benchmarks/">high-performant</a> APIs.
									We handle the heavy lifting, you focus on features that matter.
								</p>

								<p>
									With our state of the art CSS-in-JS engine, composable APIs, streamlined syntax,
									and dynamic themes, Aesthetic provides the best developer experience on the
									market.
								</p>

								<ul>
									<li>Atomic CSS</li>
									<li>CSS variable driven themes</li>
									<li>Variants and compound variants</li>
									<li>Built-in directionality (LTR, RTL)</li>
									<li>Automatic vendor prefixing</li>
									<li>Server-side rendering</li>
									<li>Client-side hydration</li>
									<li>And much more...</li>
								</ul>
							</div>

							<div className="col col--6 code-block--condensed">
								<Tabs
									defaultValue="react-styled"
									values={[
										{ label: 'React Styled', value: 'react-styled' },
										{ label: 'React Hooks', value: 'react-hooks' },
										{ label: '...', value: 'other' },
									]}
								>
									<TabItem value="react-styled">
										<CodeBlock className="language-ts">{REACT_STYLED_EXAMPLE}</CodeBlock>
									</TabItem>

									<TabItem value="react-hooks">
										<CodeBlock className="language-ts">{REACT_HOOKS_EXAMPLE}</CodeBlock>
									</TabItem>

									<TabItem value="other">
										<div className="alert alert--secondary" role="alert">
											And many more supported integrations and APIs to come in the future!
										</div>
									</TabItem>
								</Tabs>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}

export default Home;
