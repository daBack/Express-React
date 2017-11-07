var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Top extends React.Component {
  render() {
    return (
          <div class="topBox" id='img'>
              <h1>{this.props.title}</h1>
          </div>
    );
  }
}

Top.propTypes = {
    title: PropTypes.string,
};

module.exports = Top;
