<template>
  <article>

    <section class="text-center">
      <div id="section" >
        <h3>{{ $store.state.aboutMe }}</h3>
      </div>
    </section>
  </article>
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
  width:100%

}

h3{
  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
  
}
</style>