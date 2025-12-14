<template>
  <v-footer class="footer pa-0 border-t">

    

    <v-container fluid>

    <v-row dense class="footer-top">

      <v-col cols="6">
        <RouterLink to="/namooActors">
        <div class="bottom-logo"></div>
        </RouterLink>
      </v-col>

      <!--=============
      Family site
      ================-->
      <v-col cols="6" class="d-flex flex-column align-end">
      <nav class="d-flex flex-column align-end ga-1">
        <h5 class="caption14">Family site</h5>
        <ul class="d-flex flex-column align-end footer-site ga-2"><li class="footer-shop stitle36-2"><a
          href="https://namooshop.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          >namoo shop</a></li>

          <li>
          <ul>
          <li class="footer-icon d-flex">
            <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            density="compact"
            variant="plain"/>
          </li>
          </ul>
          </li>
          
        </ul>
      </nav>
      </v-col>

    </v-row>
    

    <!--=============
    연락처 + 약관
    ================-->
    <v-row as="aside" dense>
      <v-col cols="12" sm="6" class="footer-contact caption12">
        <p><b>TEL</b> +82.2.3444.1919 <b>| FAX</b> +82.2.3444.1570</p>
        <p>06071 서울특별시 강남구 도산대로 102길 17(청담동 54-3)</p>
        <p>17, Dosan-daero 102-gil, Gangnamo-gu, Seoul, Korea</p>
      </v-col>

      <v-col cols="12" sm="6" class="footer-terms d-flex flex-column align-sm-end justify-end">
        <h5 class="caption14">개인정보처리방침</h5>
        <p class="caption12">&copy;Namooactors Entertainment All Rights Reserved.</p>
      </v-col>
    </v-row>
    </v-container>

  </v-footer>
</template>









<script setup>
const icons = ["mdi-twitter", "mdi-instagram", "mdi-youtube", "mdi-web"];
</script>
