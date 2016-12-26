import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHelpsFeed } from '../../actions/helpActions';
import HelpForm from '../common/help/HelpForm';
import HelpFeedItem from '../common/help/presentation/HelpFeedItem';
import CircularProgress from 'material-ui/CircularProgress';
import { getSortedFeeds } from '../../selectors/helpSelector';

function loadData(props) {
  props.getHelpsFeed();
}

class HelpPage extends React.Component {
  
  componentDidMount() {
    loadData(this.props);
  }

  render() {
    const { items, isFetching } = this.props;
    const styles = {
      circularProgress: {
        margin: "auto",
        width: "10%",
        padding: "20px",
      },
    };
    return (
      <div>
        <div className="container">
            {
              isFetching ?
                <div style={styles.circularProgress}>
                  <CircularProgress size={1} />
                </div> :
                <ul className="collection">
                  {items.map(item =>
                    <HelpFeedItem key={item.id} item={item} />
                  )}
                </ul>
            }

        </div>
      </div>
    );
  }
}

HelpPage.propTypes = {
  getHelpsFeed: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};


function mapStateToProps(state, ownProps) {
  return {
    items: getSortedFeeds(state),
    isFetching: state.helps.isFetching,
  };
}

export default connect(mapStateToProps, { getHelpsFeed })(HelpPage);
