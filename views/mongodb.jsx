var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Mongodb extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div class='outerWrapper'>
              <div class='innerWrapper'>
                  <div class="db-wrapper">
                      <div id="db-show" className="db-show">Here is where the database's collection will be shown.</div>
                      <form>
                          <div class="form-inside">
                              <input type='text' className='db-input' id='db-name' placeholder='Name' required></input>
                              <input type='number' className='db-input' id='db-dumhet' placeholder='Dumhet' required></input>
                              <input type="text" className='db-input' id='db-cool' placeholder='Är du cool?' required></input>
                          </div>
                          <div class="buttons">
                              <button id='db-add' type='button'>Add</button>
                              <button id='db-remove' type='button'>Remove all</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      <script src="/js/db.js"></script>
      </Layout>
    );
  }
}

Mongodb.propTypes = {
    title: PropTypes.string,
};

module.exports = Mongodb;
