<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
    <a class="navbar-brand mr-1" href="index.html">Tokyo Toukei Box</a>
    <!-- Navbar Search -->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">Search</button>
        </div>
      </div>
    </form>

    <!-- Navbar -->
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item">
        <a class="nav-link" href="https://www.e-stat.go.jp">estat</a>
      </li>
      <li class="nav-item dropdown no-arrow mx-1">
        <a class="nav-link">Alert</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Login</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  left: 0;
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
