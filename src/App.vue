<template>
  <div>

    <mdb-navbar color="white" style="min-height:75px;" light>
      <mdb-navbar-brand href="https://mdbootstrap.com/">NineTwenty</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href='/home' active>Home</mdb-nav-item>
          <mdb-nav-item href='/about' >About</mdb-nav-item>
          <mdb-nav-item href='/contact' >Contact</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>

    <div id="app" style="padding:20px;">

      <div id='home' v-if="currentPath === '/home' || currentPath === '/'">
        <Home msg="Welcome!!" />
      </div>
      
    </div>

    <Footer/>

  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue"

import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} from "mdbvue";

export default {
  name: "App",
  components: {
    Home,
    Footer,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },
  data () {
    return {'currentPath': window.location.pathname}
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
