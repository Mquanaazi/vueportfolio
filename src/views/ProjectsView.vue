<template lang="">

    <div id=section>    
    <div id="projects">
        <div v-for= "project in projectData()" :key="project.name">
            <card-comp :data=project>
              <template #placeholder>
                <h3>{{project.name}}</h3>
                <!-- {{project.name}} -->
            </template> 
            
        </card-comp>
        </div>
    </div>
</div>
    </template>
    <script>
    import CardComp from "../components/CardComp.vue";
    export default {
        methods:{
            projectData(){
                return this.$store.state.Projects
            }
        },
        computed:{
            getProjects(){
                return this.$store.dispatch('getProjects')
            }
        },
        mounted() {
            this.getProjects
        },
        components :{
            CardComp
        }
    }
    </script>
    <style scoped>
        #projects{
            display: flex;
            flex-wrap: wrap;
            /* display: grid;
            grid-template-columns: repeat(3, 1fr); */
  height: 100%;


}
    </style>
   