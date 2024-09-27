<template>
   <!-- <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/olwethu_malumla_resume.pdf">💫DOWNLOAD MY CV💫</a> -->
   <div class="home-container">
     <div >
       <div><h1 class="typing-animation">💫ASPIRING SOFTWARE DEVELOPER💫</h1></div>
       <div id="content"><home-comp/></div>
    <br><br>
  </div>
  <div id="mypara">
  <p>'Hello! welcome to my profile.Get to know me better through this portfolio'</p>
  </div>
</div>
</template>

<script>
import HomeComp from "../components/HomeComp.vue";
export default {
  name: "HomeView",
  components: {
    HomeComp
  }
}
</script>

<style scoped>
.home-container {
  display:flex;
 
    
  justify-content:center;
  align-items: center;
  height: 110vh;
  width:110vw;
  text-align: center;
  margin-left:5px;
  /* margin-right: 15px; */
  margin-bottom: 5px;


}

h1 {
  color: black;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden; /* Ensures the text stays within bounds */
  border-right: 3px solid; /* Simulate cursor */
  animation: typing 4s steps(30, end), blink-caret 0.75s step-end infinite;
  width: 0; /* Start with hidden text */
  margin-left:200px;
}
P{
  font-size: 50px;
  color: aqua;
  margin-right:210px
}
#content{
  margin-left: 200px;
}


/* Typing effect */
@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 100%; /* Show full text */
  }
  60% {
    width: 100%; /* Hold the full text for a moment */
  }
  100% {
    width: 0; /* Hide text again */
  }
}

/* Blinking caret effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

h1.typing-animation {
  animation: typing 6s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
}
/* Media Queries for Responsive Design */
@media (max-width: 300px) {
  .home-container {
    flex-direction: column;
    height: 80vh;
  }
  #content {
    margin-left: 0;
  }
  h1 {
    font-size: 1.5rem;
    margin-left: 0;
    margin-top: 15px;
  }
  p {
    font-size: 1.2rem;
    display:flex;
    flex-direction: column;
    margin-right: 50px;
  }
}

@media (min-width: 301px) and (max-width: 400px) {
  .home-container {
    flex-direction: column;
    height: 85vh;
  }
  #content {
    margin-left: 50px;
  }
  h1 {
    font-size: 1.8rem;
    margin-left: 50px;
    margin-top: 15px;
  }
  p {
    font-size: 1.5rem;
    display:flex;
    flex-direction: column;
    
  }
}

@media (min-width: 401px) and (max-width: 600px) {
  .home-container {
    flex-direction: row;
    height: 90vh;
  }
  #content {
    margin-left: 100px;
  }
  h1 {
    font-size: 2.2rem;
    margin-left: 100px;
  }
  p {
    font-size: 1.8rem;
  }
}

@media (min-width: 601px) and (max-width: 800px) {
  .home-container {
    flex-direction: row;
    height: 95vh;
  }
  #content {
    margin-left: 150px;
  }
  h1 {
    font-size: 2.5rem;
    margin-left: 150px;
  }
  p {
    font-size: 2.2rem;
  }
}

@media (min-width: 801px) and (max-width: 1200px) {
  .home-container {
    flex-direction: row;
    height: 100vh;
  }
  #content {
    margin-left: 200px;
  }
  h1 {
    font-size: 3rem;
    margin-left: 200px;
  }
  p {
    font-size: 2.5rem;
  }
}
</style>
