<template lang="">
    <div class="container">
    <div>
        <resume-comp/>
    </div>
    <div id="cv">
        <!-- <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/OLWETHU.MALUMLA.docx">DOWNLOAD MY CV</a> -->
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
<!-- <style scoped>
   #cv{
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    justify-content: flex-end;
    background-color: aqua;
    border-radius: 10px;
    padding: 10px;
    width: 20%;

   } 
   /* .container{
    display: grid;
    grid-template-columns: 4fr fr;
   } */
</style> -->