import React from "react";

export default function Alert(props) {
    const formatAllert=(word) => {
     let tolower=word.toLowerCase();
     return tolower.charAt(0).toUpperCase() + tolower.slice(1)

    }

    const lowercase=(type)=>{
     return type.toLowerCase()
    }

  return (
  props.alert && <div
      className={`alert alert-${lowercase(props.alert.type)} alert-dismissible fade show`} role="alert">
      <strong>{formatAllert(props.alert.type)}</strong>: {props.alert.message}
    </div>
  );
}
