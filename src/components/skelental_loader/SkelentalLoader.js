import React, { useState } from "react";
import "./skelental-loader.css";

function SkelentalLoader() {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <div className="cards">
      {arr.map((el) => (
        <div className="card" key={el}>
          <div className="card_img animate"></div>
          <div className="card_title animate"></div>
          <div className="card_prc animate"></div>
          <div className="card_btn animate"></div>
        </div>
      ))}
    </div>
  );
}

export default SkelentalLoader;
