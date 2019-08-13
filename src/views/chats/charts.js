import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2019]
        }
      },
      series: [
        {
          name: "series-1",
          data: [1000, 2000,3000, 4000, 5000, 6000, 7000, 9100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="700"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;