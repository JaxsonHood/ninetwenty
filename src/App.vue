<template>
  <div id="app">

    <mdb-navbar color="white" light>
      <mdb-navbar-brand href="https://mdbootstrap.com/">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" active>Home</mdb-nav-item>
          <mdb-nav-item href="#">About</mdb-nav-item>
          <mdb-nav-item href="#">Contact</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>

    <Home msg="Welcome!!" />
    
  </div>
</template>

<script>
import Home from "./components/Home.vue";

import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";

export default {
  name: "App",
  components: {
    Home,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
