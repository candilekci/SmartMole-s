import Chart from "react-apexcharts";
import "./chart.css";
const TotalChart = ({ data }) => {
  const chartData = data.map((item) => ({
    name: item.name,
    totalCount: item.product.reduce(
      (total, product) => total + product.count,
      0
    ),
  }));
  const options = {
    options: {
      xaxis: {
        categories: chartData.map((item) => item.name),
      },
    },
    series: [
      {
        name: "Toplam Satış",
        data: chartData.map((item) => item.totalCount),
      },
    ],
  };
  return (
    <div className="total-chart">
      <span className="total-chart-tittle">Toplam Araba İstatistiği</span>
      <Chart
        options={options.options}
        series={options.series}
        type="bar"
        width={500}
        height={320}
      />
    </div>
  );
};

export default TotalChart;
