<template>
  <div class="content">
    <p>{{ name }}</p>
    <div class="row">
      <div class="col-sm-12 mb-3 p-2 bg-primary text-white">
        <h2>{{ name}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <p
              class="card-text"
            >江戸城（えどじょう）は、武蔵国豊嶋郡江戸（現在の東京都千代田区千代田）にあった日本の城である。江戸時代においては江城（こうじょう）という呼び名が一般的だったと言われ、また千代田城（ちよだじょう）とも呼ばれる。 江戸城は麹町台地の東端に、扇谷 ...</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body">
            <p
              class="card-text"
            >江戸城（えどじょう）は、武蔵国豊嶋郡江戸（現在の東京都千代田区千代田）にあった日本の城である。江戸時代においては江城（こうじょう）という呼び名が一般的だったと言われ、また千代田城（ちよだじょう）とも呼ばれる。 江戸城は麹町台地の東端に、扇谷 ...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-3">
          <DataViewer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataViewer from "@/components/chart/DataViewer";

export default {
  name: "Main",
  components: {
    DataViewer
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    name() {
      return this.$store.getters["loader/currentStatType"];
    }
  },
  methods: {}
};
</script>

<style>
.content {
  position: absolute;
  left: 200px;
  max-width: 700px;
  min-width: 350px;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}
</style>
