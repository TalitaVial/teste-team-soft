import React from "react";
import "../styles/loading.css";
import Load from "../assets/loading.svg";

export default function Loading() {
  return (
    <div className="loading_container">
      <img className="loading--img" src={Load} alt="Loading" />
    </div>
  );
}
