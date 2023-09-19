import React from "react";
import { CircularDot } from "./styled";

const LogoDot = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
          marginBottom: "25px",
        }}
      >
        <CircularDot style={{ backgroundColor: "#DA30A9" }} />
        <CircularDot style={{ backgroundColor: "orange" }} />
        <CircularDot style={{ backgroundColor: "#DA30A9" }} />
      </div>
    </>
  );
};

export default LogoDot;
