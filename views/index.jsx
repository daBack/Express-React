var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>

      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
