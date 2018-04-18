import React from 'react';
import { connect } from 'react-redux';

const UserLanding = () => <div>User Landing Page</div>;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserLanding);
