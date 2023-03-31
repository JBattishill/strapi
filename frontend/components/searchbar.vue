<template>
    <div class="uk-margin-auto uk-section uk-width-3-4" >
      <input type="text" v-model="searchTerm" @input="search">
      <ul v-if="results.length">
        <li v-for="(result, index) in results" :key="index">{{ result }}</li>
      </ul>
      <p v-else>No results found.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
        results: []
      }
    },
    methods: {
      search() {
        if (this.searchTerm.length > 2) {
          // Replace with your search API endpoint
          this.$axios.get(`/api/search?q=${this.searchTerm}`)
            .then(response => {
              this.results = response.data
            })
            .catch(error => {
              console.error(error)
            })
        } else {
          this.results = []
        }
      }
    }
  }
  </script>
  