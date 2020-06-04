<template>
  <!-- Footer -->
  <mdb-footer color="black" class="font-medium pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Link 1</a></li>
            <li class="list-unstyled"><a href="#!">Link 2</a></li>
            <li class="list-unstyled"><a href="#!">Link 3</a></li>
            <li class="list-unstyled"><a href="#!">Link 4</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>