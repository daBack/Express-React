var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

class Chat extends React.Component {
    render() {
        return (<Layout title={this.props.title}>
            <div class="formWrapper">
                <div class="innerFormWrapper">

                    <form id="form1" class="form1">
                        <div class="wrapper-chat">
                            <div class="left-chat">
                                <div class="over-chat">
                                    <ul class="urlType">
                                        <li>
                                            <code>ws://localhost:3000/</code>
                                            supports json and text
                                        </li>
                                    </ul>
                                    <input class="text-chat" id="connect_url" type="text" value="ws://localhost:3000/"/>
                                        <input class="text-chat" id="name_id" type="text" placeholder="Nickname..."/>
                                        </div>
                                        <div class="lower">
                                            <input class="button" id="connect" type="button" value="Connect"/>
                                                <input class="button" id="close" type="button" value="Close connection"/>
                                                    <input id="protocol" type="hidden" value="json"/></div>
                                                </div>
                                                <div class="right">
                                                    <div id="output" class="output"></div>
                                                    <div class="typeAndSend">
                                                        <input class="message" id="message" type="text" placeholder="Message..."/>
                                                            <input class="sendMessage" id="send_message" type="button" value="Send message"/></div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <script src="/js/client.js"></script>
                                    </Layout>
                                    ); } } Chat.propTypes = {title: PropTypes.string};

module.exports = Chat;
