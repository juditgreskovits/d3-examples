import React, { Component } from 'react';
import * as d3 from 'd3';

import data from './data';
import { createSimulation } from './simulation';

class D3Dom extends Component {

  componentDidMount() {

    const dimensions = {
      width: 1200,
      height: 600
    };

    const {
      nodes,
      links,
      simulation
    } = createSimulation(data, dimensions);

    const svg = d3.select(this._refs.svg);

    let lines = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke-width', (d) => 1)
      .attr('stroke', (d) => '#000000');

    let circles = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', 6)
      .attr('fill', (d) => '#cc0000')
      .attr('stroke', (d) => '#000000');

    simulation.on('tick', () => {
      lines
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      circles
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);
    });
  }

  ref(name) {
    this._refs = this._refs || {};

    return (el) => {
      this._refs[name] = el;
    };
  }

  render() {

    return (
      <div>
        <p>DOM</p>
        <svg ref={this.ref('svg')}
          width={1200} height={600}>
        </svg>
      </div>
    );
  }
}

export default D3Dom;
