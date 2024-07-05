<template>
  
  <div class="card" >
    <div class="content">
    <div v-if="data.name">
      <!-- <div class="background" :style="{ backgroundImage: 'url(' + data.image + ')' }"></div> -->
      <slot name="placeholder"></slot>
      <img :src="data.image" class="bounces">
      <p>Name: {{ data.name }}</p>
      <p>description: {{ data.description }}</p>
      <a :href="data.github" target="_blank" class="btn">
  GitHub
</a>

<a :href="data.vercel" target="_blank" class="btn">
  Vercel
</a>
      
      
      <slot></slot>
    </div>
    <div v-else>
      
      <!-- <div class="background" :style="{ backgroundImage: 'url(' + data.profile + ')' }"></div> -->
      <slot name="placeholder"></slot>
      <img :src="data.profile" class="bounce">
      <p>id:{{ data.id}}</p>
      <p>firstName:{{data.firstName}}</p>
      <P>lastName:{{data.lastName}}</P>
      <p>gender:{{data.gender}}</p>
      <p>contactDetails:{{data.contactDetails}}</p>
      <P>position:{{data.position}}</P>
      <p>message:{{data.message}}</p>
      <!-- <p>profile:{{data.profile}}</p> -->
      <slot></slot>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.card {
  border: 3px rgb(58, 0, 106) solid;
  border-radius: 10%;
  width: 150px;
  height: 450px;
  margin: auto;
  
  background-size: cover;
  /* background-position: center; */
  filter: blur(0.1px);
  /* flex-basis: 350px; */
  padding: 20px;
  margin: 20px;
  border: 2px solid #4af66f;
  box-sizing: border-box;
  width: 460px;
  height: 820px;
  background-color: #f2b4ee;
  box-shadow: 0 0 20px rgba(45, 225, 238, 0.941);
  border-radius: 10px;
  text-align: center;
  display:grid;
  grid-template-columns: repeat(3,1);
}

/* .background {
  position: absolute;
  top: 0;
  left: 0;
  width:300px;
  height: 450px;
  border-radius: 10%;
  background-size: cover;
  background-position: center;
  filter: blur(6px);
  /* z-index: -1; */


div {
  position: relative;
  /* justify-content: space-around; */
}
.content{
  position: absolute;
  top: 0;
  left: 0;
  color:black;
  text-shadow:2px 1px rgb(104, 230, 255);
  font-size: large;
  font-weight: bold; 
  justify-content: center;
}
/* ______________________ */
img{

  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}


.bounce {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(60, 0, 43, 0.94);
}
.btn {
  background-color: #9392f8be;
  color: #080000;
  padding: 10px 20px;
  border: 10px;
  border-radius: 5px;
  cursor:grab;
  
}

.btn:hover {
  background-color: #3a0133;
}
.bounces{
height:600px;
width:450px;
}


</style>