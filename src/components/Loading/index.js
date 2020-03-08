import React from "react";
import LoadingAnimated from "assets/icons/loading.svg";

export default function Loading({ text }) {
  return (
    <div
      style={{
        display: "flex",
        width: "120px",
        alignItems: "center",
        margin: "0 auto"
      }}
    >
      <img
        src={LoadingAnimated}
        width="20"
        style={{ display: "block", margin: "0 auto" }}
        alt=""
      />
      <span style={{ fontSize: "10px" }}>{text}</span>
    </div>
  );
}
