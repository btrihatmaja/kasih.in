import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import BioList from './presentation/BioList';
import StatsGraph from './presentation/StatsGraph';
import FeedsList from './presentation/FeedsList';
import { black, darkWhite, red500 } from 'material-ui/styles/colors';
import * as profileActions from '../../actions/profileActions.js';

function loadData(props) {
  props.getProfileBio(props.params.username);
  props.getProfileStats(props.params.username);
  props.getProfileFeeds(props.params.username);
}

class ProfilePage extends React.Component {
  componentDidMount() {
    loadData(this.props);
  } 
  render() {
    const { 
      bio, 
      feeds, 
      stats, 
    } = this.props;
    const styles = {
      tabs: {
        padding: "10px",
      },
    };
    return (
      <div>
        <div>
          <Grid fluid>
            <Row>
              <Col xs={3} sm={3} md={3} lg={2}>
                <BioList bio={bio} />
              </Col>
              <Col xs={1} sm={1} md={1} lg={1} />
              <Col xs={8} sm={8} md={8} lg={9}>
                <Tabs
                  inkBarStyle={{ background: red500 }}
                  tabItemContainerStyle={{ background: darkWhite, textColor: black }}
                  style={styles.tabs}
                >
                  <Tab label="Overview">
                    <StatsGraph stats={stats} />
                  </Tab>
                  <Tab label="Activity">
                    <FeedsList feeds={feeds} />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  getProfileBio: PropTypes.func.isRequired,
  getProfileFeeds: PropTypes.func.isRequired,
  getProfileStats: PropTypes.func.isRequired,
  bio: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
  feeds: PropTypes.object.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    bio: state.profile.bio,
    feeds: state.profile.feeds,
    stats: state.profile.stats,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfileBio: bindActionCreators(profileActions, dispatch).getProfileBio,
    getProfileStats: bindActionCreators(profileActions, dispatch).getProfileStats,
    getProfileFeeds: bindActionCreators(profileActions, dispatch).getProfileFeeds,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

