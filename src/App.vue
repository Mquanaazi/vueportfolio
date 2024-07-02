<template>
  <nav-bar/>
  <router-view/>
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
<style>
/* #content{
  height: 80vh;
} */
 #footer{
  background-color: rgba(0, 255, 255, 0.712);
  border-radius: 10px;
  justify-content: center;
  position: absolute;
  width: 100vw;
  bottom: 0;
 }
</style>

