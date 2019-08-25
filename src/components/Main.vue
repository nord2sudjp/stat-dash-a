<template>
  <div class="contents">
    Main
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <p>{{ name }}</p>
    <button @click="setStat('AAAA')">AAAA</button>
    <button @click="setStat('BBBB')">BBBB</button>

    <p>{{ stat }}</p>
  </div>
</template>

<script>
import JsonLoader from "@/components/JsonLoader.js";
export default {
  name: "Main",
  component: {
    JsonLoader
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      jsonloader: JsonLoader
    };
  },
  computed: {
    count() {
      //console.log("Store", this.$store);
      //return 1;
      return this.$store.getters.currentCount;
    },
    name() {
      return this.jsonloader.getName();
    },
    stat() {
      return this.jsonloader.getStatType();
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("plusCount");
    },
    decrement() {
      this.$store.dispatch("plusCount");
    },
    setStat(arg) {
      this.jsonloader.setStatType(arg);
      console.log(this.jsonloader.getStatType());
    }
  }
};
</script>

<style>
</style>
