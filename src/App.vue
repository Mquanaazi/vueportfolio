<template>
  <nav-bar>
    <router-view/>
  </nav-bar>
  <footer-comp/>
</template>
<script>
import NavBar from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavBar,
    FooterComp,
    },
    };
    
</script>

