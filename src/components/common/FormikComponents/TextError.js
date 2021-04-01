import React from 'react';
import s from './../../Login/Login.module.css';




function TextError (props) {
  let style1 = 'error';
  let style2 = s.errorInField;
  let severalStyles = `${style1} ${style2}`;

  return <div className={severalStyles}>{props.children}</div>
}

export default TextError