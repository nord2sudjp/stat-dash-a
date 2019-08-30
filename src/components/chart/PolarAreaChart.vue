<script>
import { PolarArea } from "vue-chartjs";
export default {
  name: "PolarAreaChart",
  extends: PolarArea,
  props: ["data", "options"],
  mounted: function() {
    this.renderChart(this.data, this.options);
  },
  watch: {
    data: function(val) {
      this.renderChart(this.data, this.options);
    },
    options: function(val) {
      this.renderChart(this.data, this.options);
    }
  }
};
</script>