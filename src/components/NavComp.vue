<template>
    <header>       
        <img src="https://mquanaazi.github.io/huluImages/mkhwanaziBest.gif" class="gif" alt="logo">
        <h1>ASPIRING SOFTWARE DEVELOPER</h1>
    </header>
    <nav>
      | <router-link to="/">HOME</router-link> | 
      <router-link to="/about">ABOUT</router-link> | 
      <router-link to="/resume">RESUME</router-link> | 
      <router-link to="/projects">PROJECTS</router-link> | 
      <router-link to="/testimonials">TESTIMMONIALS</router-link> | 
      <router-link to="/contact">CONTACTS</router-link> | 
  
    </nav>
    
  </template>
  
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0e0128;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #13018a;
    background-color: rgba(235, 96, 212, 0.485);
    border-radius: 10px;
    padding: 5px;
  }
  img{
      border:3px rgb(237, 86, 237) solid;
      border-radius: 10%;
      width: 200px;
  
      
     } 
  header{
   text-align:justify;
   justify-content: space-between;
   padding: 15px;
   background-color: rgb(94, 7, 124);
   
  }
  h1{
    /* padding: 10px; */
    text-align: right;
    color: rgb(233, 63, 202);
    /* font-size: 30px;   */
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    top:0%
  }
  
  
  
  </style>
  