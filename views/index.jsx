var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div class='outerWrapper'>
              <div class='innerWrapper'>
                  <div class='split2'>
                      <div class='leftDiv'>
                          <article>
                              My name is Oscar Bäck. A self-appointed front-end designer who enjoys doing everything all the way,
                              from taking the picture to have it colorcorrected and photoshopped.
                              <br/><br/>
                              I see myself as an aesthetic person since I play instruments, crafting furnitire and likes everything that
                              has to do with colors.
                              <br/><br/>
                              Oh, one last thing.. I love flexbox.
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

Index.propTypes = {
    title: PropTypes.string,
};

module.exports = Index;
