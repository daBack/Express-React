var React = require('react');
var PropTypes = require('prop-types');
var Navbar = require('./navbar');
var Top = require('./top');
var Footer = require('./footer');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/../css/style.css" />
          <link href="./../stylesheets/hover.css" rel="stylesheet"/>
          <link rel="stylesheet" href="./../stylesheets/client.css"/>
          <link rel="icon" href="./../img/standardIco.png"/>
          <script
              src="https://use.fontawesome.com/6dc446f9b9.js"
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
            <Top title={this.props.title}></Top>
            {this.props.children}
            <Footer></Footer>
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;
