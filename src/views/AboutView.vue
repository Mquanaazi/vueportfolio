<template>
  <section class="skills-container">
      <p>{{ $store.state.aboutMe }}</p>
    <div class="skills-page">
      <div class="skills-list">
      <h2>MY SOFT SKILLS</h2>
        <h5>* Fast Learner</h5>
        <h5>* Communication</h5>
        <h5>* Team Player</h5>
        <h5>* Adaptability</h5>
        <h5>* Flexibility</h5>
        <h5>* Time Management</h5>
        <h5>* Creativity</h5>
        <h5>* Critical Thinking</h5>
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
  padding: 40px;
  background-color: #2d0027ef;
}

.skills-page {
  max-width: 600px;
  padding: 20px;
  color: aliceblue;
  border: 1px solid #7a0899c1;
  box-shadow: 0 0 10px rgba(91, 4, 66, 0.748);
  display: flex;
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

p{
  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
  padding: 10px;
  font-size:18px;
  border-radius: 10px;
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
</style>
