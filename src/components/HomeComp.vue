<template>
 
  <section>
    <div id="container">
      <div id="card" v-for="(image, index) in images" :key="index">
        <img :src="image.src" class="card-img-top" :alt="image.alt" />
        <div class="card-body">
          <h5 class="card-title">{{ image.title }}</h5>
          <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://mquanaazi.github.io/huluImages/olwethu_malumla_resume.pdf">💫DOWNLOAD MY CV💫</a>
          <!-- <p class="card-text">{{ image.text }}</p> -->
        </div>
       
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      images: [
        {
          src: 'https://mquanaazi.github.io/huluImages/lcasnap1.jpg',
          alt: 'my picture',
          title: 'Olwethu Malumla',
          text: 'Hello! welcome to my profile.Get to know me better through this portfolio'
        },
        
        
      ]
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-around;
  margin: 40px;
}

#card {
  width: 20rem;
  height: 30rem;
  margin: 10px;
  border: 2px solid rgb(136, 10, 232);
  border-radius: 10px;
  animation: shrink-and-grow 2s forwards;
  background-color: rgba(0, 255, 255, 0.744);
}

img {
  width: 100%;
  height: 80%;
  border-radius: 10px;
}
a{
 
 background-color: #540447; /* Green */
 color: #ffffff; /* White */
 border: none;
 padding: 10px 20px;
 font-size: 15px;
 cursor: pointer;
 border-radius: 10px;
 text-decoration:dotted;
}

@keyframes shrink-and-grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

#card:hover {
  transform: scale(1.4);
  cursor: pointer;
}
/* For screens 300px and below */
@media only screen and (max-width: 300px) {
  #container {
    flex-direction: column;
    margin: 20px;
  }
  #card {
    width: 15rem;
    height: 20rem;
    margin: 5px;
  }
  img {
    height: 70%;
  }
}

/* For screens between 301px and 768px */
@media only screen and (min-width: 301px) and (max-width: 768px) {
  #container {
    flex-direction: row;
    margin: 30px;
  }
  #card {
    width: 18rem;
    height: 25rem;
    margin: 10px;
  }
  img {
    height: 75%;
  }
}

/* For screens 769px and above */
@media only screen and (min-width: 769px) {
  #container {
    flex-direction: row;
    margin: 40px;
  }
  #card {
    width: 20rem;
    height: 30rem;
    margin: 10px;
  }
  img {
    height: 80%;
  }
}
</style>