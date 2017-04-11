import * as d3 from 'd3';

export const createSimulation = (data, dimensions) => {

  const {
    nodes,
    links
  } = data;

  const {
    width,
    height
  } = dimensions;

  // shallow copy
  const ns = nodes.map((n) => {
      return {...n}
    });
  const ls = links.map((l) => {
    return {...l};
  });

  const distance = Math.sqrt(width*width + height*height)/50;

  const simulation = d3.forceSimulation(ns)
    .force('charge', d3.forceManyBody())
    .force('link', d3.forceLink(ls)
      .distance(d => distance))
    .force('collide', d3.forceCollide(distance/10))
    .force('center', d3.forceCenter(width/2, height/2));

  return {
    nodes: ns,
    links: ls,
    simulation
  }
}
