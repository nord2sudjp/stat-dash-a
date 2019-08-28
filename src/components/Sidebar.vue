<template>
  <nav id="left-sidebar" class="contents">
    <div class="sidebar-header">
      <h3>統計データ</h3>
    </div>
    <ul class="list-unstyled components">
      <li class="active">
        <a
          href="#pageJinkou"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >人口・世帯</a>
        <ul class="collapse list-unstyled" id="pageJinkou">
          <li>
            <a @click="setStat('人口総数')">人口総数</a>
          </li>
          <li>
            <a @click="setStat('人口_男')">人口-男性</a>
          </li>
          <li>
            <a @click="setStat('人口_女')">人口-女性</a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#pageShizen"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >自然環境</a>
        <ul class="collapse list-unstyled" id="pageShizen">
          <li>面積:>面積</li>
          <li>可住面積:可住面積</li>
        </ul>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    setStat(arg) {
      this.$store.dispatch("loader/setStatType", arg);
    }
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

#left-sidebar {
  position: absolute;
  top: 60px;
  left: 0;
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}
#left-sidebar .sidebar-header {
  padding: 10px;
  font-size: 12em;
  background: #6d7fcc;
}

#left-sidebar p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

#left-sidebar a,
#left-sidebar a:hover,
#left-sidebar a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#left-sidebar.active {
  margin-left: -200px;
}

#left-sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#left-sidebar ul p {
  color: #fff;
  padding: 10px;
}

#left-sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#left-sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#left-sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

.sidebar {
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
