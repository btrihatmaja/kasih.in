import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageCard from './presentation/MessageCard';
import CircularProgress from 'material-ui/CircularProgress';
import { getMessages } from '../../actions/messagesActions';

function loadData(props) {
  props.getMessages();
}

class MessagesPage extends React.Component {

  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { messages, isFetching } = this.props;
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
            <ul className="collection">
              {messages.map(item =>
                <MessageCard key={item.id} message={item} />
              )}
            </ul>
        }
      </div>
    );
  }
}

MessagesPage.propTypes = {
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages.messages,
    isFetching: state.messages.isFetching,
  };
}

export default connect(mapStateToProps, { getMessages })(MessagesPage);
