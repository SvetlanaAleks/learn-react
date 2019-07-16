import React from "react";

const input = (props) => {
   return <input type="text" onChange={props.changed} value={props.currentName} />
};

export default input;