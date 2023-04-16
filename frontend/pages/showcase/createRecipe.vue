<template>

    <div class="uk-section uk-width-3-4 uk-margin-auto">
      <h2>Create a Recipe - Almost Functional? maybe?</h2> <br>

      <form @submit.prevent="ArticleCreation">
        <label>
          Title:
          <input 
          v-model="title"
          type="text" 
          class="uk-input uk-form-medium uk-margin-small" 
          placeholder="Recipe Name"
          >
          
        </label> <br> <br>

        <label>
          Content:
          <textarea 
          v-model="content"
          type="text" 
          class="largeTextBox uk-input uk-form-medium uk-margin-small" 
          placeholder="Calories, Serves, Protein, etc."
          ></textarea>
        </label> <br> <br>

        <label>
          Ingredients:
          <textarea 
          v-model="ingredients"
          type="text" 
          class="largeTextBox uk-input uk-form-medium uk-margin-small" 
          placeholder="Ingredients used"
          ></textarea>
        </label> <br> <br>

        <label>
          Method:
          <textarea 
          v-model="method"
          type="text" 
          class="largeTextBox uk-input uk-form-medium uk-margin-small" 
          placeholder="Cookings method and instructions"
          ></textarea>
        </label> <br> <br>
        
        <button class="uk-button uk-button-primary" 
          type="submit">Submit
        </button>
      </form>

    </div>
  </template>
  
  <!-- Below script is expected to work with the creation of a function called addArticle that will take the 
       ArticleInput object and add it to a new article in the articles collection. 
       This still needs to be done in the server-side 
    -->

<script>
import gql from 'graphql-tag'

export default {
  name: "ArticleCreation",
  data() {
    return {
      title: '',
      content: '',
      ingredients: '',
      method: '',
    }
  },
  methods: {
    ArticleCreation() {
      this.$apollo
      .mutate({
        mutation: gql`
      mutation createArticle {
        createArticle(data: {
           title: "Jarryd's Non Variable Test", 
             content: "test@test.cz", 
             ingredients: "479332973", 
             method: "method", 
      }) {
            data{
              id
               attributes{
                title
                content
                ingredients
                method
              }
            }
      }
    },
    `,
    },
  )},
},
}

</script>
<!-- 
//           # (
//           #   $title: String
//           #   $content: String
//           #   $ingredients: String
//           #   $method: String
//           # )
//           # {(data: {
//           #       title: $title,
//           #       content: $content,
//           #       ingredients: $ingredients,
//           #       method: $method,
//           #     }) 
//           # }
//           # `,
//           #variables: {
//           #title: this.title,
//           #content: this.content,
//           #ingredients: this.ingredients,
//           #method: this.method,



// # mutation createArticle {
// #   createArticle(data: {
// #       title: "test22", 
// #       content: "test@test.cz", 
// #       ingredients: "479332973", 
// #       method: "David", 
// #       }) {
// #             data{
// #               id
// #                attributes{
// #                 title
// #                 content
// #                 ingredients
// #                 method
// #               } -->