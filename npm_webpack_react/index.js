const React = require('react');
const ReactDOM = require('react-dom');
const LC = require('literallycanvas');


const MyApp = React.createClass({
    render: function() {
        return <LC.LiterallyCanvasReactComponent imageURLPrefix="/build/lc-assets/img" />;
    }
});


ReactDOM.render(<MyApp />, document.getElementById('main'));
