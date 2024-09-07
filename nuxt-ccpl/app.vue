<template>
  
    <NavInfo></NavInfo>
    <NavBar></NavBar>
    <NuxtPage />
    <footer>
    <FooterApp></FooterApp>
  </footer>
</template>
<script>

import NavInfo from '../components/header/navinfo.vue'
import NavBar from './components/navbar/navbar.vue'
import FooterApp from "./components/footer/footer.vue"

export default {
 name: 'App',

 components: {
  NavInfo,
  NavBar,
  FooterApp
 },

}
</script>
