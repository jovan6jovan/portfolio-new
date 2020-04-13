import React from 'react';
import { Link } from "react-router-dom";
import './Button.scss';

const Button = ({ text, classNames, path }) => {
  return (
    <Link to={path} className={classNames}>
      {text}
    </Link>
  )
}

export default Button;
