var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Report extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div class='outerWrapper'>
              <div class='innerWrapper'>
                  <div class='report'>
                      <div class='kmom'>
                          <h4>Kmom01</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom02</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom03</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom04</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom05</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom06</h4>
                          <article></article>
                      </div>
                      <div class='kmom'>
                          <h4>Kmom10</h4>
                          <article></article>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
    );
  }
}

Report.propTypes = {
    title: PropTypes.string,
};

module.exports = Report;
