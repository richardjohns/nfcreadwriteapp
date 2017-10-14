import React from 'react';
import Tappable from 'react-tappable';

import '../css/hello.css';

import Message from './Message';

// set initial state in this.state. 
// Find what initial nfc object state should be - empty object?
// set event listener into componentdidmount?
// how will event listener return intent?
// bind all needed functions in constructor.
// if all else fails... set up fake nfc event.

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: 'Hello world',
      message: '',
      nfcmsg: 'No NFC tag found'
    }
  }

  nfc.addMimeTypeListener("text/json", *onNfc *, success, failure);


  // window.addEventListener is to listen for events handled in the DOM for which there are no synthetic event equivalents.
  // 1st arg: event you want to listen for. 2nd arg: function that will handle the event.
  componentDidMount() {
    window.addEventListener("resize", this.handleResizedScreen.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizedScreen.bind(this));
  }

  nfcstatus(nfc) {
    this.setState({
      nfcmsg: nfc
    });
  }

  sayHello(msg) {
    // CSSTransitionGroup will fade this in
    this.setState({
      message: msg
    });
    setTimeout(() => {
      // CSSTransitionGroup will now fade this out
      this.setState({
        message: '',
      });
    }, 2000);
  }

  render() {
    return (
      <div className="hello">
        <Message message={ this.state.message } />
        <br/>
        <p className="hello-message">{this.state.nfcmsg}</p>
        <Tappable
          className="button-say-hello"
          onTap={() => this.sayHello(this.state.displayName)}
        >Say hello</Tappable>
      </div>
    );
  }
};

module.exports = Hello;
