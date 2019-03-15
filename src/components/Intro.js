import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import markdownify from '../utils/markdownify';
import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Intro extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' fullscreen fade-up'}>
                <div className="inner">
                    <h1>{_.get(this.props, 'section.title')}</h1>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                    {_.get(this.props, 'section.actions') && 
                        <ul className="actions">
                            {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                                <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={classNames('button', {'scrolly': _.get(action, 'is_scrolly')}, {'primary': _.get(action, 'is_primary')})}>{_.get(action, 'label')}</a></li>
                            ))}
                        </ul>
                    }
                </div>
            </section>
        );
    }
}
