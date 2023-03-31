<template>
<div class="uk-section"> 
        <div class="imageContainer">
            <div class="headerImage uk-align-center uk-padding-small uk-height-large uk-overlay " 
            data-src="https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=687&q=80" uk-img>
        </div>
        </div>    

          <div class="uk-flex-middle uk-flex-center">
          <h2 class="uk-text-middle uk-text-center uk-heading-medium">What are you waiting for? Sign up now!</h2>
          <p class="uk-text-middle uk-text-center uk-text-large uk-text-light">Oh that functionality isnt built yet? My bad... coming soon!</p>
          </div>


    <div class="uk-section uk-width-3-4 uk-margin-auto">
    <!-- Base form, for placeholding only, not wired at all -->
    <h2>Create User - coming soon</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name">
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <button type="submit">Create User</button>
    </form>
     </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post('/api/users', this.user)
        console.log(response.data)
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

  