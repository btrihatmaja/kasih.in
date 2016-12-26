/* TODO: Add more fields to save
 * 1. Address + Maps
 * 2. Photos
 *
 */

import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import SubjectIcon from 'material-ui/svg-icons/action/subject';
import AddLocationIcon from 'material-ui/svg-icons/maps/add-location';
import EditLocationIcon from 'material-ui/svg-icons/maps/edit-location';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, change } from 'redux-form';
import HelpDescriptionModal from './HelpDescriptionModal';
import HelpLocationModal from './HelpLocationModal';
import isEmpty from 'lodash/isEmpty';
import { cyan500 } from 'material-ui/styles/colors';
import {
  centerChanged,
  discardLocation,
  helpSubmit,
  hideDescriptionModal,
  hideLocationModal,
  markerChanged,
  saveLocation,
  showDescriptionModal,
  showLocationModal,
} from '../../../../actions/helpActions';
import { default as canUseDom } from "can-use-dom";

const geolocation = (
  canUseDom && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser does not support geolocation.");
    },
  }
);

const styles = {
  root: {
    paddingLeft: 40,
    width: '99%',
  },
  textarea: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
};

const submit = (values, dispatch) => {
  // Here we will assign fields that user does not need to fill.
  // FIXME: name is hardcoded.
  const submitValues = Object.assign({}, values, { name: 'John' });
  return new Promise((resolve, reject) => {
    dispatch(helpSubmit({ submitValues, resolve, reject }));
  });
};

const goods = [
  'Food',
  'Service',
  'Money',
  'Clothes',
  'Books',
];

const category = [
  'Education',
  'Food',
  'Sports',
  'Medics',
  'Events',
  'Home',
];

const renderTitleField = ({ input, label }) => (
  <div>
    <TextField
      floatingLabelText={label}
      style={styles.textField}
      hintText="I want to help ..."
      {...input}
    />
  </div>
);

const renderDescriptionField = ({ input, label }) => (
  <div>
    <TextField
      floatingLabelText={label}
      multiLine
      hintText="Shortly describe what you want to help"
      style={styles.textarea}
      inputStyle={styles.textarea}
      {...input}
    />
  </div>
);

const renderGoodsAutoComplete = ({ input, label }) => (
    <AutoComplete
      floatingLabelText={label}
      filter={AutoComplete.fuzzyFilter}
      dataSource={goods}
      style={{ paddingRight: 10 }}
      hintText="What could you help with"
      maxSearchResults={5}
      {...input}
    />
);

const renderCategoryAutoComplete = ({ input, label }) => (
    <AutoComplete
      floatingLabelText={label}
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={category}
      style={{ paddingLeft: 10 }}
      hintText="Category of help"
      maxSearchResults={5}
      {...input}
    />
);

class HelpForm extends React.Component {
  constructor(props) {
    super(props);
    const dispatch = this.props;
    this.handleMarkerPositionChanged = this.handleMarkerPositionChanged.bind(this);
    this.handleLocationSave = this.handleLocationSave.bind(this);
    this.handleLocationDiscard = this.handleLocationDiscard.bind(this);
  }

  componentDidMount() {
    geolocation.getCurrentPosition((position) => {
      this.props.dispatch(centerChanged({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
      this.props.dispatch(markerChanged({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }));
    });
  }

  handleLocationOpen() {
    this.props.dispatch(showLocationModal());
  }

  handleLocationSave() {
    this.props.dispatch(saveLocation(this.props.marker));
  }

  handleLocationDiscard() {
    this.props.dispatch(discardLocation());
  }

  handleMarkerPositionChanged(e) {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    // Dispatch an action to tell the new position of the marker
    this.props.dispatch(markerChanged({
      lat: latitude,
      lng: longitude,
    }));
  }

  render() {
    const {
      handleSubmit,
      submitting,
      formValues,
      hideLocationModalAction,
      locationModalIsOpened,
      locationSaved,
      center,
      marker,
    } = this.props;

    return (
      <div style={styles.root}>
        <h1 className="center">What can you help today?</h1>
        <form onSubmit={handleSubmit(submit.bind(this))}>
          <div>
            <Field name="title" component={renderTitleField} label="Title" />
            <Field name="description" component={renderDescriptionField} label="Description" />
            <Field name="goods" component={renderGoodsAutoComplete} label="Goods" />
            <Field name="category" component={renderCategoryAutoComplete} label="Category" />
            <div>
              <RaisedButton
                type="submit"
                primary
                label="POST"
                icon={<FontIcon className="material-icons">send</FontIcon>}
              />
              <IconButton
                tooltip="Location"
                onClick={() => this.handleLocationOpen()}
                disabled={submitting}
                >
                {
                  locationSaved ?
                    <EditLocationIcon color={cyan500} /> :
                    <AddLocationIcon />
                }
              </IconButton>
            </div>
          </div>
          <HelpLocationModal
            locationModalIsOpened={locationModalIsOpened}
            hideLocationModalAction={hideLocationModalAction}
            center={center}
            marker={marker}
            handleMarkerPositionChanged={this.handleMarkerPositionChanged}
            handleLocationDiscard={this.handleLocationDiscard}
            handleLocationSave={this.handleLocationSave}
            />
        </form>
      </div>
    );
  }
}

HelpForm.propTypes = {
  actions: PropTypes.object.isRequired,
  center: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  formValues: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  hideLocationModalAction: PropTypes.func.isRequired,
  locationModalIsOpened: PropTypes.bool.isRequired,
  locationSaved: PropTypes.bool.isRequired,
  marker: PropTypes.object,
  submitting: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    center: state.help.center,
    locationModalIsOpened: state.help.locationModalIsOpened,
    locationSaved: state.help.locationSaved,
    marker: state.help.marker,
    submitting: state.help.submitting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideLocationModalAction: bindActionCreators(hideLocationModal, dispatch),
  };
}

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.message)) {
    errors.message = 'Message is required';
  }
  return errors;
};

const helpForm = reduxForm({
  form: 'help',
  validate,
})(HelpForm);

export default connect(mapStateToProps, mapDispatchToProps)(helpForm);
