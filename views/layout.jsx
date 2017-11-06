var React = require('react');
var PropTypes = require('prop-types');
var Navbar = require('./navbar');
var Top = require('./top');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/../css/style.css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // This is making use of ES6 template strings, which allow for
            // multiline strings. We specified "{jsx: {harmony: true}}" when
            // creating the engine in app.js to get this feature.
            console.log("hello world");
          `,
            }}
          />
        </head>
        <body>
            <Navbar></Navbar>
            <Top></Top>
            {this.props.children}
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
