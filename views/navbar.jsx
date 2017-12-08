var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Navbar extends React.Component {
  render() {
    return (
      <nav class='navbar'>
          <img src="/img/icon.png" class='navImg'/>
          <div class='navA'>
              <a class='hvr-shutter-out-vertical' href="/">Home</a>
              <a class='hvr-shutter-out-vertical' href="/about">About</a>
              <a class='hvr-shutter-out-vertical' href="/report">Report</a>
              <a class='hvr-shutter-out-vertical' href="/chat">Chat</a>
          </div>
      </nav>
    );
  }
}

module.exports = Navbar;
