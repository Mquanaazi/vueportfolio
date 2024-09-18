<template>
   <!-- <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/olwethu_malumla_resume.pdf">💫DOWNLOAD MY CV💫</a> -->
   <div class="home-container">
     <div >
       <div><h1 class="typing-animation">💫ASPIRING SOFTWARE DEVELOPER💫</h1></div>
       <home-comp/>
    <br><br>
  </div>
  <p>'Hello! welcome to my profile.Get to know me better through this portfolio'</p>
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
  height: 100vh;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
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
}
P{
  font-size: 50px;
  color: aqua;
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
</style>
