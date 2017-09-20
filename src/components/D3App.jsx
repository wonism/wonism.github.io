import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { max } from 'd3-array';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

class D3App extends PureComponent {
  constructor(props){
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const $chart = this.$chart;
    const { data, margin, width, height } = this.props;
    const dataLength = data.length;
    const barWidth = width / dataLength;

    const x = scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width])
      .padding(0.1);
    const y = scaleLinear()
      .domain([0, max(data, d => d.value)])
      .range([height, 0]);
    const xAxis = axisBottom(x);
    const yAxis = axisLeft(y);

    yAxis.ticks(10);

    select($chart)
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('g');

    select($chart)
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    select($chart)
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    select($chart)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => y(d.value))
      .attr('width', barWidth)
      .attr('height', d => height - y(d.value))
      .attr('transform', (d, i) => `translate(${(i * barWidth) + margin.left}, 0)`);
  }

  render() {
    const { width, height } = this.props;

    return (
      <svg
        ref={chart => this.$chart = chart}
        width={width}
        height={height}
      />
    );
  }
}

D3App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.number,
  ).isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number,
    left: PropTypes.number,
  }),
  width: PropTypes.number,
};

D3App.defaultProps = {
  margin: {
    top: 20,
    bottom: 30,
    right: 30,
    left: 40,
  },
  width: 500,
  height: 500,
};

export default D3App;
