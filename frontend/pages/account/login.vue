<template>
<div>
    <div class="uk-section"> 
    <div class="imageContainer">
        <div class="headerImage uk-align-center uk-padding-small uk-height-large uk-overlay " 
        data-src="https://images.unsplash.com/photo-1621106036911-964146b9f97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" uk-img>
        </div>
    </div>    

        <div class="uk-flex-middle uk-flex-center">
        <h2 class="uk-text-middle uk-text-center uk-heading-medium">User login page</h2>
        <p class="uk-text-middle uk-text-center uk-text-large uk-text-light">Coming soon!</p>
        </div>
    
    </div>

    <!-- Not functional yet  -->
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async submitForm() {
        try {
          const response = await this.$strapi.login(this.email, this.password)
          console.log(response)
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  