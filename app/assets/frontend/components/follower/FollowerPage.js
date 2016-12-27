import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'material-ui/List';
import FollowerList from './presentation/FollowerList';
import CircularProgress from 'material-ui/CircularProgress';
import { getFollower } from '../../actions/followerActions';

function loadData(props) {
  props.getFollower();
}

class FollowerPage extends React.Component {
  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { users, isFetching } = this.props;
    const styles = {
      circularProgress: {
        margin: "auto",
        width: "10%",
        padding: "20px",
      },
    };
    return (
      <div>
        {
          isFetching ?
            <div style={styles.circularProgress}>
              <CircularProgress size={1} />
            </div> :
            <List>
              {users.map(user =>
                <FollowerList key={user.id} user={user} />
              )}
            </List>
        }
      </div>
    );
  }
}

FollowerPage.propTypes = {
  getFollower: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.follower.users,
    isFetching: state.follower.isFetching,
  };
}

export default connect(mapStateToProps, { getFollower })(FollowerPage);
