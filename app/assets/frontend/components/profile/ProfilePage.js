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
    const numberOfPosts = {
      labels: [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Helps posted",
          fillColor: "rgba(252,233,79,0.5)",
          strokeColor: "rgba(82,75,25,1)",
          pointColor: "rgba(166,152,51,1)",
          pointHoverBackgroundColor: "rgba(252,233,79,1)",
          pointStrokeColor: "#fff",
          data: [65, 59, 80, 81, 56, 55, 40, 12, 14, 15, 16, 17],
          spanGaps: false,
        },
        {
          label: "Helps needed",
          fillColor: "rgba(2,233,79,0.5)",
          strokeColor: "rgba(21,75,25,1)",
          pointColor: "rgba(21,152,51,1)",
          pointStrokeColor: "#fff",
          pointHoverBackgroundColor: "rgba(2,233,79,1)",
          data: [21, 20, 40, 21, 16, 45, 20, 2, 14, 19, 26, 1],
          spanGaps: false,
        },
      ],
    };
    const categoryOfHelps = [
      {
        label: "Foods",
        value: 30,
        color: "#F7464A",
      }, 
      {
        label: "Education",
        value: 50,
        color: "#E2EAE9",
      },
      {
        label: "Sports",
        value: 100,
        color: "#D4CCC5",
      }, 
    ];
    const categoryOfNeeds = [
      {
        label: "Foods",
        value: 10,
        color: "#F7464A",
      }, 
      {
        label: "Education",
        value: 5,
        color: "#E2EAE9",
      },
      {
        label: "Sports",
        value: 2,
        color: "#D4CCC5",
      }, 
    ];
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
                    <StatsGraph 
                      helpsPosted={numberOfPosts} 
                      categoryOfHelps={categoryOfHelps}
                      categoryOfNeeds={categoryOfNeeds} />
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

