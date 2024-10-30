<template>
  <section class="skills-container">
      <p>{{ $store.state.aboutMe }}</p>
      <p>During my time of being at Life Choices studio, I had an opportunity to attend classes at AWS and obtained a few attendance certificates, including:
        <a class="flashing-link icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" 
          href="https://mquanaazi.github.io/huluImages/awsCertificates.pdf">
          click me!
        </a>
        <br>
        <!-- <p>I then continued with my learning journer on CISCO and completed a few CISCO courses including:</p> -->
      </p>
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
        <!-- <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/awsCertificates.pdf">💫MY AWS CERTIFICATES💫</a> -->
      </div>
    </div>
  </section>
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
 
  padding: 40px;
  background-color: #2d0027ef;
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
