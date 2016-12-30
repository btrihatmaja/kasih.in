import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';

const BioList = (props) =>
  <div>
    <div>
      <Avatar src={props.bio.bio.avatar} size={100} />
    </div>
  </div>;

BioList.propTypes = {
  bio: PropTypes.object.isRequired,
};

export default BioList;
