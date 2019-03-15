import React from 'react';
import _ from 'lodash';

import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Sidebar extends React.Component {
  render() {
    return (
      <section id="sidebar">
        <div className="inner">
          <nav>
            <ul>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sidebar.entries'), (item, item_idx) => (
                <li key={item_idx}>
                  <a href={_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(item, 'url')))}>{_.get(item, 'title')}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
