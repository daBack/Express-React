var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class About extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <p>dis is about</p>
      </Layout>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
};

module.exports = About;
