import React, { PropTypes } from 'react';
import Chart from 'chart.js';
import { Line as LineChart } from 'react-chartjs';
import ReactDom from 'react-dom';

const StatsGraph = (props) =>
  <div>
    <h2>
      Helps posted
    </h2>
    <div>
      <LineChart data={props.helpsPosted} width="600" height="250" />
    </div>
  </div>;

StatsGraph.propTypes = {
  helpsPosted: PropTypes.object.isRequired,
};

export default StatsGraph;
