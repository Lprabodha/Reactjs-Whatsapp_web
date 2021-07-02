import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/App.scss";
import Messager from "./pages/Messager";

import Signin from "./pages/Signin";
// pages to screens
import Splash from "./pages/Splash";

function ZuzApp(props) {
  const { loaded, session, setState } = props;
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 1000);
  }, []);
  return (
    <BrowserRouter>
      {loaded ? (
        <Fragment>
          {/**Signin */}
          <Route
            exact
            path="/"
            render={(props) => (session ? <Messager /> : <Signin />)}
          />
        </Fragment>
      ) : (
        <Splash />
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.App,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) =>
      dispatch({ type: "APP_STATE", state: { loaded: loaded } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZuzApp);
