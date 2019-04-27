import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./components/layout/DefaultLayout";
import {
  notFound,
  test1,
  test2,
  test3,
  test4
} from "./components/test/TestComponent";
import Homepage from "./components/test/Home";

const Routes = ({ match }) => {
  //   console.log(111,match);
  return (
    <Layout>
      <Switch>
        <Route path={`${match.url}test1`} component={test1} />
        <Route path={`${match.url}test2`} component={test2} />
        <Route path={`${match.url}test3`} component={test3} />
        <Route path={`${match.url}test4`} component={test4} />
        <Route exact path={match.url} component={Homepage} />
        <Route path={`${match.url}`} component={notFound} />
      </Switch>
    </Layout>
  );
};

Routes.propTypes = {
  match: PropTypes.any
};

export default Routes;
