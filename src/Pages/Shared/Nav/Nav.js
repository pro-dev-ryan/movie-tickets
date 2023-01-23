import React from "react";

const Nav = () => {
  return (
    <div
      className="container-fluid shadow-sm"
      style={{ backgroundColor: "#f7f7f7", borderBottom: "1px solid white" }}
    >
      <h1 className="text-center d-none d-md-block fs-1 pt-2 fw-bolder">
        Welcome to the Show-Time
      </h1>
      {/* Smaller Screen Title */}
      <h5 className="text-center d-md-none mt-4 fw-bolder">
        Welcome to the Show-Time
      </h5>
    </div>
  );
};

export default Nav;
