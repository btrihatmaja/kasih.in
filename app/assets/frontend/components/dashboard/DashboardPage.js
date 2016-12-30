import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from '../../actions/dashboardActions';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Divider from 'material-ui/Divider';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import AboutPage from '../about/AboutPage';
import DialogPage from '../dialog/DialogPage';
import MessagesPage from '../messages/MessagesPage';
import SupportPage from '../support/SupportPage';
import HomeTabs from './presentation/HomeTabs';
import * as sidebarIndexTypes from '../../constants/sidebarIndexTypes';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    const dispatch = this.props;
    this.handleClick = this.handleClick.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  showPage(index) {
    switch (index) {
      case sidebarIndexTypes.HOME:
        return <HomeTabs />;
      case sidebarIndexTypes.MESSAGES:
        return <MessagesPage />;
      case sidebarIndexTypes.SUPPORT:
        return <SupportPage />;
      case sidebarIndexTypes.ABOUT:
        return <AboutPage />;
      default:
        return <HomeTabs />;
    }
  }
  handleClick(index) {
    this.props.pageSwitcher(index);
  }
  render() {
    const {
      sidebarIndex,
      pageSwitcher,
    } = this.props;
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={3} sm={3} md={3} lg={2} >
              <SelectableList defaultValue={sidebarIndex}>
                <ListItem
                  value={sidebarIndexTypes.HOME}
                  primaryText="Home"
                  onClick={() => this.handleClick(sidebarIndexTypes.HOME)}
                  />
                <ListItem
                  value={sidebarIndexTypes.MESSAGES}
                  primaryText="Messages"
                  onClick={() => this.handleClick(sidebarIndexTypes.MESSAGES)}
                  />
                <Divider />
                <ListItem 
                  primaryText="Support" 
                  value={sidebarIndexTypes.SUPPORT}
                />
                <ListItem
                  value={sidebarIndexTypes.ABOUT}
                  primaryText="About"
                  onClick={() => this.handleClick(sidebarIndexTypes.ABOUT)} />
              </SelectableList>
            </Col>
            <Col xs={8} sm={8} md={8} lg={9}>
              <DialogPage />
              {
                this.showPage(sidebarIndex)
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


DashboardPage.propTypes = {
  sidebarIndex: PropTypes.number,
  pageSwitcher: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    sidebarIndex: state.dashboard.sidebarIndex,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageSwitcher: bindActionCreators(dashboardActions, dispatch).pageSwitcher,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
