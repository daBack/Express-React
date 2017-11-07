var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class About extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div class='outerWrapper'>
              <div class='innerWrapper'>
                  <div class='split2'>
                      <div class='leftDiv'>
                          <article>
                              A tiny bit less information about me.
                              <br/><br/>
                              The information that you mind be intrested is that, yes I am single, yes I am really 21 years old and
                              yes, I do work out.
                              <br/><br/>
                              <a href="https://github.com/daBack/Express-React">Github repo</a>
                              <br/><br/>
                              Oh, one last thing.. I just love flexbox.
                          </article>
                      </div>
                      <div class='rightDiv'>
                          <img src='/img/me.png' alt='jag' />
                      </div>

                    </div>
              </div>
          </div>
      </Layout>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
};

module.exports = About;
