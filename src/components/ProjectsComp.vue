<!-- <template lang="">
    <div  :style="{
        backgroundImage:`url(${image})`,
        backgroundSize:'cover',
        filter: 'blur(4px)'

    }">

    </div>
        <div>
        <h1>My projects</h1> 

                <slot name =""></slot>
                <slot name ="author"></slot>
                <slot name ="pages"></slot>
                <slot></slot>
        </div>
</template>
<script>

export default {
  
    props:["image"]
    
}
</script>
<style scoped>

    div{
        width:300px;
        height: 400px;
        position:absolute;
        border-radius: 10%;
    }
    
</style> -->
<template lang="">
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
       
    },
}
</script>
<style lang="">
    
</style>