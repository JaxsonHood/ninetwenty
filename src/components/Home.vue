<template>
  <div class="hello">
    <mdb-navbar color="white" light>
      <mdb-navbar-brand href="https://mdbootstrap.com/">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" active>Home</mdb-nav-item>
          <mdb-nav-item href="#">About</mdb-nav-item>
          <mdb-nav-item href="#">Contact</mdb-nav-item>
          <!-- <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>-->
        </mdb-navbar-nav>
        <!-- <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>-->
      </mdb-navbar-toggler>
    </mdb-navbar>

    <img alt="Our logo-name" src="../assets/logo-name.png" style="width:600px;" />
    <h1>{{ msg }}</h1>
    <div class="mx-auto w-responsive" style="max-width:400px; padding:20px;">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import {
  Card,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbInput,
  mdbContainer
} from "mdbvue";

export default {
  name: "Home",
  components: {
    Card,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput,
    mdbContainer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
