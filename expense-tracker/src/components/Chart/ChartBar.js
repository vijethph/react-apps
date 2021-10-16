import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight =
      Math.round((props.value.value / props.maxValue) * 100) + "%";
  }

  // style attribute wants a JS object with CSS statements, as a value
  // when writing CSS Statements inside that JS object, quotes are required only if dash is used for CSS properties, like background-image, otherwise use smallcase properties, like backgroundImage
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
