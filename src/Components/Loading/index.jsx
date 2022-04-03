import React from "react";

import styled from "./Loading.module.css";
import Load from "../../Assets/Gifts/loading (1).gif";

const Loading = () => (
  <div className={styled.container}>
    <motionimg src={Load} alt="Loading gif" />
  </div>
);

export default Loading;
