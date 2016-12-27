import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from 'material-ui/List';
import FollowingList from './presentation/FollowingList';
import CircularProgress from 'material-ui/CircularProgress';
import { getFollowing } from '../../actions/followingActions';

function loadData(props) {
  props.getFollowing();
}

class FollowingPage extends React.Component {
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
                <FollowingList key={user.id} user={user} />
              )}
            </List>
        }
      </div>
    );
  }
}

FollowingPage.propTypes = {
  getFollowing: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.following.users,
    isFetching: state.following.isFetching,
  };
}

export default connect(mapStateToProps, { getFollowing })(FollowingPage);
