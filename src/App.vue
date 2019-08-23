<template>
  <div id="app">
    AAAA
    <Header />
    <Sidebar />
    <Main />
    <HelloWorld />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Main
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
