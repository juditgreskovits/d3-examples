import React, { Component } from 'react';

import data from './data';
import { createSimulation } from './simulation';

class D3React extends Component {

  componentWillMount() {

    const dimensions = {
      width: 1200,
      height: 600
    };

    const {
      nodes,
      links,
      simulation
    } = createSimulation(data, dimensions);

    simulation.on('tick', () => this.forceUpdate());

    this.setState({
      nodes,
      links
    });
  }

  render() {

    const {
      nodes,
      links
    } = this.state;

    const renderLinks = links.map((l, i) =>
      <line
        key={i}
        x1={l.source.x}
        y1={l.source.y}
        x2={l.target.x}
        y2={l.target.y}
        stroke='#000000' />
    );

    const renderNodes = nodes.map((n, i) =>
      <circle
        key={i}
        cx={n.x}
        cy={n.y}
        r={6}
        fill='#cc0000'
        stroke='#000000' />
    );

    return (
      <div>
        <p>REACT</p>
        <svg width={1200} height={600}>
          { renderLinks }
          { renderNodes }
        </svg>
      </div>
    );
  }
}

export default D3React;
