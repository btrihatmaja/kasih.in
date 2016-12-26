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
    this.handleClick = this.handleClick.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  showPage(page) {
    switch (page) {
      case 'home':
        return <HomeTabs />;
      case 'messages':
        return <MessagesPage />;
      case 'support':
        return <SupportPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomeTabs />;
    }
  }
  handleClick(page) {
    this.props.pageSwitcher(page);
  }
  render() {
    const { page, pageSwitcher } = this.props;
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={3} sm={3} md={3} lg={2} >
              <SelectableList defaultValue={1}>
                <ListItem
                  value={1}
                  primaryText="Home"
                  onClick={() => this.handleClick('home')}
                  />
                  <ListItem
                    value={2}
                    primaryText="Messages"
                    onClick={() => this.handleClick('messages')}
                    />
                  <Divider />
                  <ListItem primaryText="Support" value={3}/>
                  <ListItem
                    value={4}
                    primaryText="About"
                    onClick={() => this.handleClick('about')} />
              </SelectableList>
            </Col>
            <Col xs={8} sm={8} md={8} lg={9}>
              <DialogPage />
              {
                this.showPage(page)
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


DashboardPage.propTypes = {
  page: PropTypes.string,
  pageSwitcher: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    page: state.dashboard.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageSwitcher: bindActionCreators(dashboardActions, dispatch).pageSwitcher,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
