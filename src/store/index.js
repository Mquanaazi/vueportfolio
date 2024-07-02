import { createStore } from 'vuex'
// import axios from axios
export default createStore({
  state: {
    aboutMe:null,
    Projects:null,
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
      state.Projects=payload
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
    setTestimonials(state,payload){
      state.testimonials=payload
    },
  },
  actions: {
    async getAboutMe({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log(converted);
      commit('setAboutMe', converted.aboutMe)
    },
    async getProjects({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log(converted);
      commit('setProjects', converted.Projects)
    },
    async getEducation({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log('Received education data:', converted.education);
      commit('setEducation', converted.education)
    },
    async getSkills({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log('Received skills data:', converted.skills);
      commit('setSkills', converted.skills)
    },
    async getWorkExp({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log('Received workExp data:', converted.workExp);
      commit('setWorkExp', converted.workExp)
    },
    async getTestimonials({ commit }) {
      let fetchedInfo = await fetch('https://mquanaazi.github.io/first_api/data/index.json')
      let converted = await fetchedInfo.json()
      console.log(converted);
      commit('setTestimonials', converted.testimonials)
    }
  }
})