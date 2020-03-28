import React from 'react';

import Avatar from '@site/src/components/Avatar';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';
import SVG from 'react-inlinesvg';
import Tags from '@site/src/components/Tags';

import classnames from 'classnames';
import dateFormat from 'dateformat';
import {enrichTags} from '@site/src/exports/tags';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import './styles.css';

function GuideItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isGuidePage = false,
  } = props;
  const {categories, description, permalink, readingTime, seriesPosition, tags} = metadata;
  const {author_github, last_modified_on: lastModifiedOn, title} = frontMatter;
  const enrichedTags = enrichTags(tags, 'guides');
  const domainTag = enrichedTags.find(tag => tag.category == 'domain');
  const domainBG = domainTag ? domainTag.value : 'default';
  const platformTag = enrichedTags.find(tag => tag.category == 'platform');
  const platformName = platformTag ? platformTag.value : null;
  const sourceTag = enrichedTags.find(tag => tag.category == 'source');
  const sourceName = sourceTag ? sourceTag.value : null;
  const sinkTag = enrichedTags.find(tag => tag.category == 'sink');
  const sinkName = sinkTag ? sinkTag.value : null;

  const {siteConfig} = useDocusaurusContext();
  const {metadata: {installation, sources, sinks}} = siteConfig.customFields;
  const {platforms} = installation;
  const platform = platformName && platforms[platformName];
  const source = sourceName && sources[sourceName];
  const sink = sinkName && sinks[sinkName];
  const icon = (platform || source || sink) !== null;

  let logoPath = null;

  if (platform) {
    logoPath = platform.logo_path;
  } else if (source) {
    logoPath = source.logo_path;
  } else if (sink) {
    logoPath = sink.logo_path;
  }

  return (
    <Link to={permalink + '/'} className={`guide-item`}>
      <article className={`domain-bg domain-bg--${domainBG} domain-bg--hover`}>
        <header>
          <div className="category">{categories[0].name}</div>
          <h2 title={title}>{seriesPosition && (seriesPosition + '. ')}{title}</h2>
        </header>
        <footer>
          {logoPath && <SVG src={logoPath} className="logo" />}
          {!logoPath && icon && <div className="logo"><i className="feather icon-server" /></div>}
          {!logoPath && !icon && <Tags colorProfile="guides" tags={tags} />}
          <div className="action">read now</div>
        </footer>
      </article>
    </Link>
  );
}

export default GuideItem;