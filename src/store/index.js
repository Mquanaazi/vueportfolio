import { createStore } from 'vuex'
// import axios from axios
export default createStore({
  state: {
    aboutMe:null,
    projects:null,
    education:null,
    skills:null,
    workExp:null,
    testimonials:null
    

    

  },
  getters: {
  },
  mutations: {
    setAboutMe(state,payload){
      state.aboutMe=payload
    },
    setProjects(state,payload){
      state.projects=payload
    },
    setEducation(state,payload){
      state.education=payload
    },
    setSkills(state,payload){
      state.skills=payload
    },
    setWorkExp(state,payload){
      state.workExp=payload
    },
    setTestimonaials(state,payload){
      state.testimonials=payload
    },
  },
  actions: {
    async getAboutMe(aboutMe){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      aboutMe.commit('setaboutMe',converted.aboutMe)
    },
    async getProjects(projects){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      projects.commit('setprojects',converted.projects)
    },
    async getEducation(education){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      education.commit('seteducation',converted.education)
    },
    async getSkills(skills){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      skills.commit('setskills',converted.skills)
    },
    async getWorkExp(workExp){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      workExp.commit('setworkExp',converted.workExp)
    },
    async getTestimonials(testimonials){
      let fetchedInfo =await fetch ('https://mquanaazi.github.io/first_api/data/index.json')
      let converted= await fetchedInfo.json()
      console.log(converted);
      testimonials.commit('settestimonials',converted.testimonials)
    }
  },
  modules: {
  }
})
