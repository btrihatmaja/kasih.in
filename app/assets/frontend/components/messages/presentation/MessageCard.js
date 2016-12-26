import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MessageCard = (props) =>
  <Card>
    <CardHeader
      title={props.message.from}
      subtitle={props.message.subject}
      actAsExpander
      showExpandableButton
      avatar="images/yuna.jpg" />
    <CardText expandable>
      <div style={{ padding: '5px' }}>
        {props.message.message}
      </div>
    </CardText>
    <CardActions>
      <FlatButton label="Reply" />
      <FlatButton label="Delete" />
    </CardActions>
  </Card>;

MessageCard.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageCard;
