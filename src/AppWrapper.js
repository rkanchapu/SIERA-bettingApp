import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import App from "./App";

function AppWrapper(props) {
  return <App {...props} />;
}

AppWrapper.propTypes = {
  isLoading: PropTypes.bool,
};
AppWrapper.defaultProps = {
  isLoading: false,
};

const mapStateToProps = (state) => ({
  isLoading: state.mainReducer.isLoading,
});

export default connect(mapStateToProps)(AppWrapper);
