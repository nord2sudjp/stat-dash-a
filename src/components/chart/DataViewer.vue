<template>
  <div class="content">
    DataViewer
    <div class="rec">
      <table class="table table-bordered">
        <tr v-for="rec in recs">
          <th>{{rec.area}}</th>
          <td>{{rec["year"]}}</td>
          <td>{{rec[target] | delimiter}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataViewer",

  data() {
    return {};
  },
  computed: {
    target() {
      return this.$store.getters["loader/targetFields"];
    },
    recs() {
      return this.$store.getters["loader/dataRecords"];
    }
  },
  methods: {},
  filters: {
    delimiter: function(value) {
      if (!value) return "";
      return value.toLocaleString();
    }
  }
};
</script>

<style>
.rec {
  max-height: 300px;
  overflow: auto;
}
.rec::-webkit-scrollbar {
  width: 10px;
}

.rec::-webkit-scrollbar-track {
  background: #ddd;
}

.rec::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>