<template>
    <div class="card">
      <div v-if="data.name">
        
        <!-- <h1>{{ car.make }}</h1> -->
         <!-- <div v-if="car">
          <slot name="car"></slot>
        </div> -->
        <!--
        <div v-else >
          <h1>{{ gaming_console.name}}</h1>
          <slot name="games"></slot>
        </div> -->
        <slot name="placeholder"></slot>
        <h1>Name: {{ data.name }}</h1>
            <p>manufacturer: {{ data.name }}</p>
            <!-- <p>Release_year: {{ data. }}</p>
            <p>Storage: {{ data.Storage }}</p>
            <p>Price: {{ data.price }}</p> -->
        <slot></slot>
      </div> 
      <div v-else>
        <slot name="placeholder"></slot>
        <!-- <h1>Make:{{ data. }}</h1>
              <p>Model:{{data.model}}</p> -->
              <P>Year:{{data.year}}</P>
              <!-- <p>Color:{{data.color}}</p>
              <p>Price:{{data.price}}</p> -->
        <slot></slot>
      </div> 
    </div>
  </template>
  
  <script>
  export default {
    props: ['data']
   
  }
  </script>
  <style scoped>
     div{
      border:3px rgb(102, 114, 24) solid;
      border-radius: 10%;
      width: 300px;
      height: 450px;
      margin: auto;
      
     } 
  </style>