<template lang="">
    <div id=section>
    <div class="container">
    <div>
        <resume-comp/>
    </div>
    <div id="cv">
        <!-- <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/OLWETHU.MALUMLA.docx">DOWNLOAD MY CV</a> -->
    </div>
    </div>
</div>
</template>
<script>
import ResumeComp from '@/components/ResumeComp.vue';
export default {
    components:{
        ResumeComp
    }
}
</script>
<style scoped>
#container{
  height: 100%;
  width:100%

}
</style>