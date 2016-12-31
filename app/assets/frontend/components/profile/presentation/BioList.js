import React, { PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { grey500 } from 'material-ui/styles/colors';

const style = { 
  description: {
    color: grey500,
    fontSize: 15,
  },
  avatar: { margin: 20, align: "center" },
};

const BioList = (props) =>
  <div>
    <div>
      <Avatar src={props.bio.bio.avatar} size={150} style={style.avatar} />
    </div>
    <div>
      <h2>
        {props.bio.bio.name}
      </h2>
      <Divider />
      <br />
      <a href={`mailto:${props.bio.bio.email}`} target="_top">
        {props.bio.bio.email}
      </a>
      <p style={style.description}>
        {props.bio.bio.description}
      </p>
    </div>
  </div>;

BioList.propTypes = {
  bio: PropTypes.object.isRequired,
};

export default BioList;
