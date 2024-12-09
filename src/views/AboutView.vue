<template>
  <section class="skills-container">
      <p>{{ $store.state.aboutMe }}</p>
      
    <div class="skills-page">
      <div class="skills-list">
      <h2>SOFT SKILLS</h2>
        <h5>* Fast Learner</h5>
        <h5>* Communication</h5>
        <h5>* Team Player</h5>
        <h5>* Adaptability</h5>
        <h5>* Flexibility</h5>
        <h5>* Time Management</h5>
        <h5>* Creativity</h5>
        <h5>* Critical Thinking</h5>
        <br>
        <div class="achievements">
          <h2>ACHIEVEMENTS 🥳</h2>

          <a class="flashing-link icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25 text-white" 
            href="https://mquanaazi.github.io/huluImages/awsCertificates.pdf" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-link"></i>CLICK ME: AWS SKILLS CENTER
          </a>
          <br><br>

          
          <a class="flashing-link icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25 text-white" 
          href="https://www.credly.com/users/olwethu-malumla.94baa29c" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-link"></i>CLICK ME: CISCO[0]
        </a> 
        
        <br><br>
        
        <a class="flashing-link icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25 text-white" 
          href="https://www.credly.com/users/olwethu-malumla" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-link"></i>CLICK ME: CISCO[1]
        </a>
        </div>
       
      </div>
    </div>
  </section>
  <!-- <p>During my time of being at Life Choices studio, I had an opportunity to attend classes at AWS and obtained a few attendance certificates, including:
        <a class="flashing-link icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" 
          href="https://mquanaazi.github.io/huluImages/awsCertificates.pdf">
          click me!
        </a>
        <br>
      </p> -->
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getAboutMe');
  }
}
</script>

<style scoped>
.skills-container {
  display: flex;
  justify-content: center;
  max-width: 1500px;
 margin-right: 8px;
  padding: 40px;
  /* background-color: #2d0027ef; */
}

.skills-page {
  max-width: 1000px;
  padding: 20px;
  color: aliceblue;
  border: 1px solid #7a0899c1;
  box-shadow: 0 0 10px rgba(91, 4, 66, 0.748);
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center; /* Center content */
}

.skills-list {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  margin-top: 20px;
  width: 100%; /* Take full width */
  text-align: left; /* Align text to the left */
  border-radius:10%
}

h2 {
  text-align: center;
}

p {
  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
  
  font-size:23px;

  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
  padding: 10px;
  

  border-radius: 10px;
  margin: 2px;
  width: 100%; /* Take full width */
}

h5 {
  margin: 10px 0;
  font-size: 1.1rem;
}
.achievements{
  /* background-color: rgba(26, 3, 62, 0.322); */
  border-radius: 10%;
  background-size:cover;

}

@media (max-width: 768px) {
  .skills-page {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  h5 {
    font-size: 1rem;
  }
}
.flashing-link {
    animation: flash 1s infinite;
  }

  @keyframes flash {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
</style>
