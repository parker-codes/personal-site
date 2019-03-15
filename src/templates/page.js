import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div id="wrapper">
                    <section id="main" className="wrapper">
                        <div className="inner">
                            <h1 className="major">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                            {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                                <span className="image fit"><img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt="" /></span>
                            }
                            {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}
