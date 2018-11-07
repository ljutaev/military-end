import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Countdown from './components/Countdown/Countdown.js'

class App extends Component {
  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    return (
      <Layout>
        <Countdown date={`${year}-12-30T00:00:00`} />
      </Layout>
    );
  }
}

export default App
