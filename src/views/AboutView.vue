<template>
 

    <section class="text-center">
      <div id="section" >
        <h1>{{ $store.state.aboutMe }}</h1>
      </div>
    </section>
  
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getAboutMe');
  }
}
</script>
<style scoped>
article{
  height: 48vh;
  
}
#section{
  height: 100%;
  width:120%

}

h3{
  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
  
}
</style>