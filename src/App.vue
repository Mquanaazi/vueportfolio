<template>
  <nav-bar/>
  <div>
    <spinner-comp-vue v-if="!contentLoaded"/> <!-- Use the spinner to load all while data is being fetched from api -->
    <router-view v-if="contentLoaded"/> <!-- Display the router view when content is fully  loaded -->
  </div>
  <footer-comp/>
</template>
<script>
import NavBar from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";
import SpinnerCompVue from './components/SpinnerComp.vue';

export default {
  components: {
    NavBar,
    FooterComp,
    SpinnerCompVue
  },
  data() {
    return {
      contentLoaded: false
    }
  }
}
</script>
<style>
/* #content{
  height: 80vh;
} */
 #footer{
  background-color: rgba(164, 174, 240, 0.579);
  border-radius: 10px;
  justify-content: center;
  /* position: absolute; */
  width: 100vw;
  bottom: 0;
 }
</style>

