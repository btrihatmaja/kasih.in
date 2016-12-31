import React, { PropTypes } from 'react';
import HelpFeedItem from '../../common/help/presentation/HelpFeedItem';

const FeedsList = (props) =>
  <div>
    <ul className="collection">
      {
        props.feeds.feeds.map(item => <HelpFeedItem key={item.id} item={item} />)
      }
    </ul>
  </div>;

FeedsList.propTypes = {
  feeds: PropTypes.object.isRequired, 
};

export default FeedsList;
