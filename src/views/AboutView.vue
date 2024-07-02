<template>
  <section class="text-center">
  <div id="section" >
    {{ $store.state.aboutMe }}
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