import React, { PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import HelpForm from '../../common/help/HelpForm';
import HelpPage from '../../help/HelpPage';
import FollowingPage from '../../following/FollowingPage';
import FollowerPage from '../../follower/FollowerPage';
import { black, darkWhite, red500 } from 'material-ui/styles/colors';

const HomeTabs = () =>
  <Tabs
    inkBarStyle={{background: red500}}
    tabItemContainerStyle={{background: darkWhite, textColor: black}}>
    <Tab label="Help someone">
      <HelpForm />
    </Tab>
    <Tab label="Find Help">
      <HelpPage />
    </Tab>
    <Tab label="Followers">
      <FollowerPage />
    </Tab>
    <Tab label="Following">
      <FollowingPage />
    </Tab>
  </Tabs>;

export default HomeTabs;
