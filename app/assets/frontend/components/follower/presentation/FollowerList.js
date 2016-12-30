import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import { grey400, white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (followed) =>
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Message</MenuItem>
    <MenuItem>View profile</MenuItem>
    {
      followed ? <MenuItem>Unfollow</MenuItem> : <MenuItem>Follow</MenuItem>
    }
  </IconMenu>;

const FollowerList = (props) =>
  <ListItem
    primaryText={props.user.name}
    secondaryText={props.user.description}
    leftAvatar={<Avatar src={props.user.avatar} />}
    rightIconButton={rightIconMenu(props.user.followed)}
  />;

FollowerList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default FollowerList;
