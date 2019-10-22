import * as React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import Footer from "../components/Footer/Footer";
import Admin from "../components/Admin/Admin";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import Home from "../components/Home";
// import "prismjs/themes/prism-okaidia.css";

export default props => (
  <div>
    <Helmet>
      <title>10th Planet Huntsville</title>
      <meta name="10phsv" content="10th Planet Huntsville BJJ" />
      <link rel="shortcut icon" type="image/png" href={`${favicon}`} />
    </Helmet>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
    <Footer />
  </div>
);
