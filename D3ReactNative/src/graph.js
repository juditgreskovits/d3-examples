import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Dimensions from 'Dimensions';

import { data } from './data';
import { createSimulation } from './simulation';

import Svg,{
  Circle,
  Line
} from 'react-native-svg';

export default class Graph extends Component {

  componentWillMount() {

    const dimensions = Dimensions.get('window');

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
      width,
      height
    } = Dimensions.get('window');

    const {
      nodes,
      links
    } = this.state;

    const renderLinks = links.map((l, i) =>
      <Line
        key={i}
        x1={l.source.x}
        y1={l.source.y}
        x2={l.target.x}
        y2={l.target.y}
        stroke='#000000'
        strokeWidth={1}
      />
    );

    const renderNodes = nodes.map((n, i) =>
      <Circle
        key={i}
        cx={n.x}
        cy={n.y}
        r={6}
        fill='#cc0000'
        stroke='#000000'
      />
    );

    return (
      <View style={styles.container}>
        <Svg width={width} height={height}>
          { renderLinks }
          { renderNodes }
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
