import Chart from "react-apexcharts";
import "./chart.css";

const DonutChart = ({ data }) => {
  const colors = data.product.map((item) => item.color);
  const counts = data.product.map((item) => item.count);

  const chartData = {
    labels: colors,
    series: counts,
  };

  const chartOptions = {
    labels: colors,
    legend: {
      show: true,
    },
  };
  let toplamArac = 0;
  for (let i = 0; i < counts.length; i++) {
    toplamArac += counts[i];
  }

  return (
    <div className="donut-chart">
      <div className="donut-header">
        <span className="donut-chart-tittle">{data.name}</span>
        <span className="donut-chart-counter">Toplam Araç: {toplamArac}</span>
      </div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChart;
