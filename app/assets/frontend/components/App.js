// This component handle the Application template used in every page
import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Header from './common/Header';

const App = (props) =>
  <div>
    <Header />
      <Grid fluid>
        <Row>
          <Col xs={1} sm={1} md={1} lg={1} />
          <Col xs={10} sm={10} md={10} lg={10}>
              {props.children}
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} />
        </Row>
      </Grid>

  </div>;

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
