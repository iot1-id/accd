import React from "react";
// import Aux from "../../hoc/Auxy";
const Layout = (props) => {
  const preventDefault = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <main onClick={preventDefault}>{props.children}</main>
    </div>
  );
};

export default Layout;
