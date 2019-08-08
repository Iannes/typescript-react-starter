import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Store from "../contexts/Store";
import Layout from "./Layout";
import "../styles.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <p>Hi</p>
      </Layout>
    </>
  );
};

const WithStore = () => {
  return (
    <Store>
      <App />
    </Store>
  );
};

export default WithStore;
