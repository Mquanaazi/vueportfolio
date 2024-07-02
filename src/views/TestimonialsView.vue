<template lang="">

        
    <div id="testimonials">
        <div v-for= "testimonial in testimonialData()" :key="testimonial.name">
            <card-comp :data=testimonial>
              <template #placeholder>
                <h3>{{testimonial.firstName}}</h3>
                <!-- {{testimonial.name}} -->
            </template> 
            
        </card-comp>
        </div>
    </div>
    
    </template>
    <script>
    import CardComp from "../components/CardComp.vue";
    export default {
        methods:{
            testimonialData(){
                return this.$store.state.testimonials
            }
        },
        computed:{
            getTestimonials(){
                return this.$store.dispatch('getTestimonials')
            }
        },
        mounted() {
            this.getTestimonials
        },
        components :{
            CardComp
        }
    }
    </script>
    <style scoped>

    </style>
   