import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
  const chartDataPointsValues = props.chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMax = Math.max(...chartDataPointsValues);
  return (
    <div className="chart">
      {props.chartDataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          totalMax={totalMax}
        ></ChartBar>
      ))}
    </div>
  );
}
