import { Component } from 'react';
import Header from '../components/Header';

class Feedbacks extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">Feedbacks</h1>
      </>
    );
  }
}

export default Feedbacks;
