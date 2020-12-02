import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isAuthUser } = props;
  if (isAuthUser){
    return <Redirect to="/notes" />
  } else if (!isAuthUser) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);