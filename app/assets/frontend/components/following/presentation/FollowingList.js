import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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

const rightIconMenu = (username) =>
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Message</MenuItem>
    <MenuItem 
      primaryText="View profile"
      containerElement={<Link to={`/profile/${username}`} />} />
    <MenuItem>Unfollow</MenuItem>
  </IconMenu>;

const FollowingList = (props) =>
  <ListItem
    primaryText={props.user.name}
    secondaryText={props.user.description}
    leftAvatar={<Avatar src={props.user.avatar} />}
    rightIconButton={rightIconMenu(props.user.username)}
  />;

FollowingList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default FollowingList;
