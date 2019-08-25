<template>
  <div class="contents left-sidebar">
    Sidebar
    <p>
      <ul class="sidebar">
      <li class="sidebar-link"><span @click="increment">++++</span></li>
      <li class="sidebar-link"><span @click="decrement">----</span></li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    increment() {
      this.$store.dispatch("plusCount");
    },
    decrement() {
      this.$store.dispatch("plusCount");
    }
  }
};
</script>

<style>
.left-sidebar {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100px;
  height: 100%;
  background-color: #bbaaaa;
}

.sidebar{
    padding: 0;
    margin: 0;
    list-style-type: none;
}

li {
    text-align: -webkit-match-parent;
}

.sidebar span {
  display: inline-block;
}

.sidebar-link {
  font-size: 1em;
  font-weight: 400;
  display: inline-block;
  color: #2c3e50;
  border-left: 0.25rem solid transparent;
  padding: 0.35rem 1rem 0.35rem 1.25rem;
  line-height: 1.4;
  width: 100%;
  box-sizing: border-box;
}
</style>
