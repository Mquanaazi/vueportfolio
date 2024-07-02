<template>
    <div class="card">
      <div v-if="data.name">
        
        
        <slot name="placeholder"></slot>
        <h1>Name: {{ data.name }}</h1>
            <p>: github {{ data.github }}</p>
            <p>vercel: {{ data.vercel }}</p>
            <p>description: {{ data.description }}</p>
            <p>image: {{ data.image }}</p>
        <slot></slot>
      </div> 
      <div v-else>
        <slot name="placeholder"></slot>
        <h1>id:{{ data.id}}</h1>
              <p>firstName:{{data.firstName}}</p>
              <P>lastName:{{data.lastName}}</P>
              <p>gender:{{data.gender}}</p>
              <p>contactDetails:{{data.contactDetails}}</p>
              <P>position:{{data.position}}</P>
              <p>message:{{data.message}}</p>
              <p>profile:{{data.profile}}</p>
              
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