<template>
    <div id="carD">
      <div v-for="project in projectsData()" :key="project.name">
        <card-comp :data="projects">
  
          <template #placeholder>
            <h1>DEVELOPED BY MQUANAAZI</h1>
            
            
          </template>
          <template #default>
              <p>Project name: {{ projects.name }}</p>
          </template>
        </card-comp>
      </div>
    </div>
  </template>
  <script>
  import CardComp from "../components/CardComp.vue";
  export default{
    methods:{
          projectsData(){
              return this.$store.state.projects
          }
      },
      computed:{
          getprojects(){
              return this.$store.dispatch('getprojects')
          }
      },
      mounted() {
          this.getprojects
      },
      components :{
          CardComp
      }
  }
  
  </script>
  <style scoped>
     div{
      border:3px rgb(102, 114, 24) solid;
      border-radius: 10%;
      width: 300px;
      height: 450px;
      margin: auto;
      display:flex;
      
     } 
  </style>
  <!-- <template lang="">
    <div>
        {{$store.state}}
         projects
        <div v-for= "project in projectData()" :key = "project.name">
            <h1>{{project.name}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },
    // computed:{
    //     getAboutMe(){
    //         return this.$store.dispatch('getAboutMe')
    //     },
    //     getEducation(){
    //         return this.$store.dispatch('getEducation')
    //     }
    // },
    mounted(){
        this.getAboutMe
        // this.getEducation
    },
}
</script>
<style lang="">
    
</style> -->