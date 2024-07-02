<template>
    <div class="contact-page">
      <h1>Contact Me</h1>
      <p>Get in touch with me through the following channels:</p>
      <ul>
        <li>
          <i class="fas fa-envelope"></i>
          <a href="olwe2tcpipv4@duck.com">olwe2tcpipv4@duck.com</a>
        </li>
        <li>
          <i class="fas fa-phone"></i>
          <a href="tel:+27763936097">+27763936097</a>
        </li>
        <li>
          <i class="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/your_linkedin_profile/" target="_blank">LinkedIn</a>
        </li>
        <li>
          <i class="fab fa-github"></i>
          <a href="https://github.com/your_github_username" target="_blank">GitHub</a>
        </li>
      </ul>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
        <br>
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message"></textarea>
        <br>
        <button type="submit">Send Message</button>
      </form>
      <!-- Display success message after form submission -->
      <p v-if="showSuccessMessage">Thank you for messaging me!</p>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        showSuccessMessage: false
      }
    },
    methods: {
      handleSubmit() {
        if (!this.formData.name || !this.formData.email || !this.formData.message) {
          alert('Please fill in all fields');
          return;
        }
  
        // Send email using EmailJS
        emailjs.send('service_lwethu', '__ejs-test-mail-service__', {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message
        }, 'olwethu')
          .then(() => {
            // Display success message and clear form
            this.showSuccessMessage = true;
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    color:aliceblue;
    background-color: #2d0027ef;
    border: 1px solid #7a0899c1;
    box-shadow: 0 0 10px rgba(91, 4, 66, 0.748);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  i {
    margin-right: 10px;
  }
  
  form {
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #7490ecb3;
    background-color: #a0d2e0;
  }
  
  button[type="submit"] {
    background-color: #330252;
    color:aliceblue;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #610351;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #a0d2e0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .modal-content h2 {
    margin-top: 0;
  }
  
  .modal-content button {
    background-color: #4CAF50;
    color: #2f003895;
    padding: 10px 20px;
    border: none;
    border: radius 10px;}
    </style>    