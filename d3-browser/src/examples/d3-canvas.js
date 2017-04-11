import React, { Component } from 'react';

import data from './data';
import { createSimulation } from './simulation';

class D3Canvas extends Component {

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

      const canvas = this._refs.canvas;
      const context = canvas.getContext('2d');

      simulation.on('tick', () => {
        context.clearRect(0, 0, dimensions.width, dimensions.height);

        links.forEach((l) => {
          context.moveTo(l.source.x, l.source.y);
          context.lineTo(l.target.x, l.target.y);
          context.stroke();
        });

        nodes.forEach((n) => {
          context.beginPath();
          context.arc(n.x, n.y, 6, 0, 2*Math.PI);
          context.fillStyle = '#cc0000';
          context.fill();
          context.stroke();
        });
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
          <p>CANVAS</p>
          <canvas ref={this.ref('canvas')}
            width={1200} height={600}>
          </canvas>
        </div>
      );
    }
}

export default D3Canvas;
