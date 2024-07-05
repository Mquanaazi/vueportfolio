<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
<template lang="">
  <div>
    <home-comp/>
  </div>
</template>
<script>
import HomeComp from "../components/HomeComp.vue";
export default {
  name: "HomeView",
  
  components: {
    HomeComp
    }
  
}
</script>
<style>

</style>
