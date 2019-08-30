<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 mb-3 p-2 bg-primary text-white">
        <h2>{{ name }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <PieChart :data="pieChartData" :options="options" refs="pie"></PieChart>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <BarChart :data="barChartData" :options="options" refs="bar"></BarChart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <PolarAreaChart :data="polarareaChartData" :options="options" refs="polararea"></PolarAreaChart>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body"></div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-3">
          <div class="card-body">
            <DataViewer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/chart/PieChart";
import BarChart from "@/components/chart/BarChart";
import PolarAreaChart from "@/components/chart/PolarAreaChart";

import DataViewer from "@/components/chart/DataViewer";
import * as palette from "google-palette";

export default {
  name: "Main",
  components: {
    DataViewer,
    BarChart,
    PieChart,
    PolarAreaChart
  },
  data() {
    return {
      /* グラフ描画用データ */
      // Line Chart
      labelsChart: null,
      dataChart: null,
      // Pie Chart
      pieChartData: null,
      barChartData: null,
      polarareaChartData: null,

      // グラフオプション
      options: {
        title: {
          display: true,
          text: ""
        },
        legend: {
          display: false
        }
      }
    };
  },
  computed: {
    name() {
      console.log("name", this.$store.getters["loader/currentStatType"]);
      return this.$store.getters["loader/currentStatType"];
    }
  },
  methods: {
    updChart() {
      var ds = this.$store.getters["loader/dataset"];
      var recs = ds["data"];
      var chartLabel = [];
      var chartData = [];
      recs.forEach(elm => {
        chartLabel.push(elm[ds["keys"]]);
        chartData.push(elm[ds["fields"]]);
      });
      return { chartLabel: chartLabel, chartData: chartData };
    },

    updBarChart() {
      if (!this.$store.getters["loader/currentStatType"]) return;
      let { chartLabel, chartData } = this.updChart();

      let datasets = [
        {
          label: this.name,
          data: chartData,
          backgroundColor: palette("mpn65", chartLabel.length).map(function(
            hex
          ) {
            return "#" + hex;
          })
        }
      ];

      this.barChartData = { labels: chartLabel, datasets: datasets };
    },

    updPieChart() {
      if (!this.$store.getters["loader/currentStatType"]) return;
      let { chartLabel, chartData } = this.updChart();

      let datasets = [
        {
          label: this.name,
          data: chartData,
          // $ npm i google-palette
          backgroundColor: palette("mpn65", chartLabel.length).map(function(
            hex
          ) {
            return "#" + hex;
          })
        }
      ];

      this.pieChartData = { labels: chartLabel, datasets: datasets };
    },

    updPolarareaChart() {
      if (!this.$store.getters["loader/currentStatType"]) return;
      let { chartLabel, chartData } = this.updChart();

      let datasets = [
        {
          label: this.name,
          data: chartData,
          // $ npm i google-palette
          backgroundColor: palette("mpn65", chartLabel.length).map(function(
            hex
          ) {
            return "#" + hex;
          })
        }
      ];

      this.polarareaChartData = { labels: chartLabel, datasets: datasets };
    }
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters["loader/currentStatType"],
      (newValue, oldValue) => {
        console.log("changed! %s => %s", oldValue, newValue);
        this.updBarChart();
        this.updPieChart();
        this.updPolarareaChart();
      }
    );
  }
};
</script>

<style>
.container {
  position: absolute;
  left: 200px;
  max-width: 900px;
  min-width: 350px;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>
