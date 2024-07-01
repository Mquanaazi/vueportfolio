<template>
  <nav-bar>
    <router-view/>
  </nav-bar>
</template>
<script>
import NavBar from "./components/NavComp.vue";
export default {
  components: {
    NavBar,
    },
    };
    
</script>

