import Chart from "react-apexcharts";
import "./chart.css";

const PieChart = ({ data }) => {
  const labels = data.map((car) => car.name);
  const counts = data.map((car) =>
    car.product.reduce((total, item) => total + parseInt(item.count), 0)
  );
  let toplamArac = 0;
  for (let i = 0; i < counts.length; i++) {
    toplamArac += counts[i];
  }

  const chartData = {
    options: {
      labels: labels,
    },
    series: counts,
  };

  return (
    <div className="pie-chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="500"
      />
      <span className="pie-chart-subtittle">{toplamArac} aracın dağılımı.</span>
    </div>
  );
};

export default PieChart;
