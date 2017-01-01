import React, { PropTypes } from 'react';
import Chart from 'chart.js';
import { Line as LineChart, Doughnut as DoughnutChart } from 'react-chartjs';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import ReactDom from 'react-dom';
import Paper from 'material-ui/Paper';
import { grey500 } from 'material-ui/styles/colors';

const style = {
  root: {
    width: '99%',
    height: '80%',
    marginTop: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
};

const StatsGraph = (props) =>
  <div>
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Paper style={style.root} zDepth={1}>
              <h3 style={{ color: grey500 }}>
                People Helped
              </h3>
              <h2>
                100
              </h2>
            </Paper>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>        
            <Paper style={style.root} zDepth={1}>
              <h3 style={{ color: grey500 }}>
                Needs Resolved
              </h3>
              <h2>
                50
              </h2>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </div>
    <div>
      <h2>
        Posts
      </h2>
      <LineChart data={props.helpsPosted} width="600" height="250" />
    </div>
    <div>
      <Grid fluid>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <h2>
              Helps
            </h2>
            <DoughnutChart data={props.categoryOfHelps} />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <h2>
              Needs
            </h2>
            <DoughnutChart data={props.categoryOfNeeds} />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>;

StatsGraph.propTypes = {
  helpsPosted: PropTypes.object.isRequired,
  categoryOfHelps: PropTypes.array.isRequired,
  categoryOfNeeds: PropTypes.array.isRequired,
};

export default StatsGraph;
