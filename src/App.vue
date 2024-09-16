<template>
  <nav-bar/>
  <div id="bodysection">
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

 #footer{
  background-color: rgba(213, 164, 240, 0.426);
  border-radius: 10px;
  justify-content: center;
 
  width: 95vw;

  bottom: 0;
 }
 #bodysection{
  height: 100%;
  width:95vw

}

</style>

