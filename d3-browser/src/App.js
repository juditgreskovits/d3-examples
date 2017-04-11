import React, { Component } from 'react';

import D3React from './examples/d3-react';
import D3Dom from './examples/d3-dom';
import D3Canvas from './examples/d3-canvas';

class App extends Component {

  componentWillMount() {

    const routes = {
      dom: <D3Dom />,
      react: <D3React />,
      canvas: <D3Canvas />
    }

    const route = 'dom';

    this.setState({
      routes,
      route
    })
  }

  handleRoute(route) {
    this.setState({
      route: route
    });
  }

  render() {

    const {
      routes,
      route
    } = this.state;

    const links = Object.keys(routes).map((r, i) =>
      <a key={i} href={`#${r}`} style={{ padding: '5px' }}
        onClick={this.handleRoute.bind(this, r)}>
        {r}
      </a>
    );

    const content = routes[route];

    return (
      <div style={{ textAlign: 'center' }}>
        { links }
        { content }
      </div>
    );
  }
}

export default App;
