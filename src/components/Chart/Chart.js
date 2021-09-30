import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  // getting all 12 values
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Gettignmax value from all the months
  const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
