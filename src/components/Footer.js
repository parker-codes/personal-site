import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

export default class Footer extends React.Component {
  render() {
    return (
      <footer
        id="footer"
        className={
          'wrapper ' +
          (_.get(this.props, 'pageContext.frontmatter.template') === 'home' ? _.get(this.props, 'pageContext.site.siteMetadata.footer.landing_style') : _.get(this.props, 'pageContext.site.siteMetadata.footer.alt_style'))
        }>
        <div className="inner">
          <ul className="menu">
            <li>{ReactHtmlParser(_.get(this.props, 'pageContext.site.siteMetadata.footer.copyright'))}</li>
          </ul>
        </div>
      </footer>
    );
  }
}
