import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

export default function(markdown) {
    if (!markdown) {
        return null;
    }
    return ReactHtmlParser(marked(markdown));
};
