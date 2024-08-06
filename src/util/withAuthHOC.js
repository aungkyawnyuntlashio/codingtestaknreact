import React from 'react'

const IsAuthenticated = () => {
    const token = localStorage.getItem("codingtesttoken");
    return token ? true : false;
}

const withAuthHOC = (WrappedComponent) => {
  return (props) => {
    if (IsAuthenticated()) {
      return <WrappedComponent {...props} />;
    } else {
      window.location.href = "/login";
    }
  };
}

export default withAuthHOC;
