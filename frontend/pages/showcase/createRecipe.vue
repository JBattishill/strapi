<template>

    <div class="uk-section uk-width-3-4 uk-margin-auto">
      <h2>Create a Recipe - Almost Functional? maybe?</h2> <br>

      <form action="" @submit.prevent="ArticleCreation">
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
        
        <label>
          URl for an image of this meal:
          <textarea 
          v-model="url"
          type="text" 
          class="uk-input uk-form-medium uk-margin-small" 
          placeholder="Image URL"
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
import {date} from '@/constants/'

export default {
  name: "articleCreation",
  data() {
    return {
      title: '',
      content: '',
      ingredients: '',
      method: '',
      url: '',
    }
  },

  methods: {
    ArticleCreation(event) {
      console.log(date),
      this.$apollo
      .mutate({
      mutation: gql`
      mutation (
        $title: String
        $content: String
        $ingredients: String
        $method: String
        $url: String
        $publishedAt: DateTime)

       {createArticle(data: {
            title: $title, 
             content: $content, 
             ingredients: $ingredients, 
             method: $method, 
             url: $url, 
             publishedAt: $publishedAt,
      }) {
            data{
              id
               attributes{
                title
                content
                ingredients
                method
                url
                publishedAt
              }
            }
      }
    },
      `,
          variables: {
          title: this.title,
          content: this.content,
          ingredients: this.ingredients,
          method: this.method,
          url: this.url,
          publishedAt: date
  },
},
 ).then(data =>{
  event.target.reset()})
}}}    

</script>