<template>

  
  <div id='content'> 
    <about-comp/>
 
  </div>
</template>
<script>
import AboutComp from "../components/AboutComp.vue";
export default {
 component: {
  AboutComp,
  }
}
</script>
<style >
#content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
