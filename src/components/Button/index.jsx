import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Button(props) {
  return (
    <Link to={`/${props.textClass}`} className={`linkButton ${props.textClass}`}>
      {props.textButton}
    </Link>
  );
}
