/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;


exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents, setBodyAttributes }) {
    let counter = 0;
    function renderConditionalComment(comment) {
        let id = 'condCommentKey_' + (counter++);
        let script = "(function(){";
        script += "var s = document.getElementById('" + id + "');";
        script += "s.parentNode.removeChild(s);";
        script += "document.write('" + comment + "');";
        script += "})()";
        return <script id={id} dangerouslySetInnerHTML={{ __html: script }}/>;
    }

    // renderConditionalComment('<!--[if lte IE 8]><script src="' + safePrefix('/assets/js/ie/html5shiv.js') + '"></script><![endif]-->'),

    setHeadComponents([
        <React.Fragment>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
            <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
            <noscript><link rel="stylesheet" href={safePrefix('assets/css/noscript.css')} /></noscript>
        </React.Fragment>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/jquery.min.js')}/>
            <script src={safePrefix('assets/js/jquery.scrollex.min.js')}/>
            <script src={safePrefix('assets/js/jquery.scrolly.min.js')}/>
            <script src={safePrefix('assets/js/browser.min.js')}/>
            <script src={safePrefix('assets/js/breakpoints.min.js')}/>
            <script src={safePrefix('assets/js/util.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>
        </React.Fragment>
    ]);

};
