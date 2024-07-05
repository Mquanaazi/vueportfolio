<template>
  <div class="resume-container">
    <div class="column" v-for="(education, index) in education" :key="index">
      <h2>Education:</h2>
      
      <ul>
        <li>
          <h3>{{ education.description }}</h3>
          <p>Year: {{ education.year }}</p>
          <p>Institution: {{ education.placeOfInstitution }}</p>
          <p>Contact Name: {{ education.contact[0].name }}</p>
          <p>Contact Details: {{ education.contact[0].contactDetails }}</p>
          <p>Contact Position: {{ education.contact[0].position }}</p>
          <img :src="education.image">
        </li>
      </ul>
    </div>
    <div class="column" v-for="(skill, index) in skills" :key="index">
      <h2>Hard Skill:</h2>
      
      <ul>
        <li>
          <h3>{{ skill.name }}</h3>
         <img :src="skill.url">
        </li>
      </ul>
    </div>
    <div class="column" v-for="(work, index) in workExp" :key="index">
      <h2>Work Experience:</h2>
      
      <ul>
        <li>
          <h3>{{ work.placeOfWork }}</h3>
          <p>Year: {{ work.year }}</p>
          <p>Description: {{ work.description }}</p>
          <p>Contact Name: {{ work.contact[0].name }}</p>
          <p>Contact Cell: {{ work.contact[0].cell }}</p>
          <p>Contact Position: {{ work.contact[0].position }}</p>
          <img :src="workExp.image">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getEducation');
    this.$store.dispatch('getWorkExp');
    this.$store.dispatch('getSkills');
  },
  computed: {
    education() {
      console.log('Education:', this.$store.state.education); 
      return this.$store.state.education;
    },
    skills() {
      console.log('Skills:', this.$store.state.skills); 
      return this.$store.state.skills;
    },
    workExp() {
      console.log('Work Exp:', this.$store.state.workExp); 
      return this.$store.state.workExp;
    }
  }
}
</script>

<style>
.resume-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.column {
  background-color: #71acff;
  padding: 20px;
  border: 2px solid #012e89;
  border-radius: 10px;
  position: relative;
}

h2 {
  margin-top: 0;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 20px;
}

p {
  margin-bottom: 10px;
}
img:hover {
  transform: scale(1.4);
  cursor: pointer;
}
</style>

