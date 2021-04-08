import React, { Component, Fragment } from 'react';
import WOW from 'wow.js'

import NavBar from './NavBar'
import Footer from './Footer'
import Routes from './Routes'

class App extends Component {
  componentDidMount() {
    let wow = new WOW({
       boxClass:     'wow',      // animated element css class (default is wow)
       animateClass: 'animated', // animation css class (default is animated)
       offset:       40,          // distance to the element when triggering the animation (default is 0)
       mobile:       false,       // trigger animations on mobile devices (default is true)
       live:         true,       // act on asynchronously loaded content (default is true)
       callback:     function(box) {
       // the callback is fired every time an animation is started
       // the argument that is passed in is the DOM node being animated
     },
       scrollContainer: null // optional scroll container selector, otherwise use window
    });

    wow.init();
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <Routes />
        <Footer />
      </Fragment>

    );
  }
}

export default App;
