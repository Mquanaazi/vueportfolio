<template>
    <div>
      <h1>Education:</h1>
      <ul>
        <li v-for="(education, index) in education" :key="index">
          {{ education.description }}
          {{ education.year }}
          {{ education.placeOfInstitution }}
          {{ education.contact[0].name }}
          {{ education.contact[0].contactDetails }}
          {{ education.contact[0].position }}
        </li>
      </ul>
  
      <h1>Skills:</h1>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill.name }}
          {{ skill.url }}
        </li>
      </ul>
  
      <h1>Work Experience:</h1>
      <ul>
        <li v-for="(work, index) in workExp" :key="index">
          {{ work.placeOfWork }}
          {{ work.year }}
          {{ work.description }}
          {{ work.contact[0].name }}
          {{ work.contact[0].cell }}
          {{ work.contact[0].position }}
        </li>
      </ul>
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
      console.log('Education:', this.$store.state.education); // Add this line
      return this.$store.state.education;
    },
    skills() {
      console.log('Skills:', this.$store.state.skills); // Add this line
      return this.$store.state.skills;
    },
    workExp() {
      console.log('Work Exp:', this.$store.state.workExp); // Add this line
      return this.$store.state.workExp;
    }
  }
}
</script>