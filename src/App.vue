<template>
  <v-app>
    <Header/>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
        <TopButton />
      </router-view>
    <Footer/>
  </v-app>
</template>

<script setup>
import Header from './include/Header.vue'
import Footer from './include/Footer.vue'
import TopButton from './components/TopButton.vue'
</script>