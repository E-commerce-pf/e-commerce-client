import React from "react";

import styled from "./Loading.module.css";

const Loading = () => (
  <div className={styled.container}>
    <div className={styled.loader}></div>
  </div>
);

export default Loading;
