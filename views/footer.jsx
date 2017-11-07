var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div class='column'>
                <a href='https://www.facebook.com/oscar.s.back'><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
                <p>Facebook</p>
            </div>
            <div class='column'>
                <a href='https://imgur.com/gallery/7PaMmpI'><i class="fa fa-coffee fa-3x" aria-hidden="true"></i></a>
                <p>My site</p>
            </div>
            <div class='column'>
                <a href='https://github.com/daBack/Express-React'><i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
                <p>Github</p>
            </div>
        </footer>
    );
  }
}

module.exports = Footer;
