import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import { Field, reduxForm } from 'redux-form';

const styles = { 
  avatar: { margin: 20, align: "center" },
  textField: {
    width: '100%',
  },
};

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField 
    hintText={label}
    style={styles.textField}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderPasswordTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField 
    hintText={label}
    type="password"
    style={styles.textField}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const EditProfilePage = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col xs={3} sm={3} md={3} lg={2}>
            <Avatar src="" size={150} style={styles.avatar} />
          </Col> 
          <Col xs={1} sm={1} md={1} lg={1} />
          <Col xs={8} sm={8} md={8} lg={9}>
            <form>
              <div>
                <Field name="name" component={renderTextField} label="Name" />
              </div>
              <div>
                <Field name="email" component={renderTextField} label="Email" />
              </div>
              <div>
                <Field name="address" component={renderTextField} label="Address" />
              </div>
              <div>
                <Field name="currentPassword" component={renderPasswordTextField} label="Current Password" />
              </div>
              <div>
                <Field name="newPassword" component={renderPasswordTextField} label="New Password" />
              </div>
              <div>
                <RaisedButton
                  type="submit"
                  primary
                  label="Update"
                />
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: 'EditProfilePage',  // a unique identifier for this form
})(EditProfilePage);
