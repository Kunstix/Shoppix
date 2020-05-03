import React, { Component } from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './errorBoundary.styles';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // process error
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imgUrl='https://i.imgur.com/lKJiT77.png' />
          <ErrorImageText>
            <h2>Oh no! Snoopie ate all our cookies!!</h2>
            <br />
            Your dog is cute but honestly a menace. Where are my shoes? Where is
            my graduation certificate? Where is the chocolate cake I baked for
            my Aunt’s birthday? And why did you take your dog to the vet on that
            same Thursday?!
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
