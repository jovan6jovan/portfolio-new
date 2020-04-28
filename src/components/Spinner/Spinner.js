import React from "react";

import loading from "../../images/loading.gif";
import "./Spinner.scss";

const Spinner = () => (
  <div className="spinner-container">
    <img src={loading} alt="loading..." className="spinner-img" />
  </div>
);

export default Spinner;