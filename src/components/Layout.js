import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import favicon from '../../static/images/favicon-32x32.png';

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          meta={[{ name: 'description', content: 'Personal website for Parker McMullin' }, { name: 'keywords', content: 'webdev, laravel, adonis, gatsbyjs, reactjs, vuejs, frontend, backend, graphql, node' }]}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}>
          <title>
            {_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}
            {_.get(this.props, 'pageContext.site.siteMetadata.title')}
          </title>
        </Helmet>
        {_.get(this.props, 'pageContext.frontmatter.template') === 'home' ? <Sidebar {...this.props} /> : <Header {...this.props} />}
        {this.props.children}
        <Footer {...this.props} />
      </React.Fragment>
    );
  }
}
