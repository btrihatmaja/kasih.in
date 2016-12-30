import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import BioList from './presentation/BioList';
import StatsGraph from './presentation/StatsGraph';
import FeedsList from './presentation/FeedsList';
import * as profileActions from '../../actions/profileActions.js';

function loadData(props) {
  props.getProfileBio(props.params.userId);
  props.getProfileStats(props.params.userId);
  props.getProfileFeeds(props.params.userId);
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
      circularProgress: {
        margin: "auto",
        width: "10%",
        padding: "20px",
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
              <Col xs={8} sm={8} md={8} lg={9}>
                <StatsGraph stats={stats} />
                <FeedsList feeds={feeds} />
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

