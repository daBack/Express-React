var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Navbar extends React.Component {
  render() {
    return (
      <nav class='navbar'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/report">Report</a>
      </nav>
    );
  }
}

module.exports = Navbar;
