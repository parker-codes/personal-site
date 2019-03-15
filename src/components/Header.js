import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import safePrefix from '../utils/safePrefix';

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')} className="title">
          {_.get(this.props, 'pageContext.site.siteMetadata.title')}
        </a>
        <nav>
          <ul>
            {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
              <li key={item_idx}>
                <a href={safePrefix(_.get(item, 'url'))} className={classNames({ active: _.get(item, 'url') === _.get(this.props, 'pageContext.url') })}>
                  {_.get(item, 'title')}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
