import React from "react";

import styled from "./Loading.module.css";
import Load from "../../Assets/gifs/loading.gif";

const Loading = () => (
  <div className={styled.container}>
    <img src={Load} alt="Loading gif" />
  </div>
);

export default Loading;
