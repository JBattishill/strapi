<template>

    <div class="uk-section uk-width-3-4 uk-margin-auto">
      <h2>Create a Recipe - Not currently functional</h2> <br>

      <form @submit.prevent="handleSubmit">
        <label>
          Title:
          <input class="uk-input uk-form-medium uk-margin-small" type="text" v-model="title">
        </label> <br> <br>

        <label>
          Content:
          <textarea class="uk-input  uk-form-medium uk-margin-small" v-model="content"></textarea>
        </label> <br> <br>

        <label>
          Ingredients:
          <textarea class="uk-input  uk-form-medium uk-margin-small" v-model="ingredients"></textarea>
        </label> <br> <br>

        <label>
          Method:
          <textarea class="uk-input uk-margin-small" v-model="method"></textarea>
        </label> <br> <br>
        
        <button class="uk-button uk-button-primary" type="submit">Submit</button>
      </form>

    </div>
  </template>
  
  <!-- Below script is expected to work with the creation of a function called addArticle that will take the 
       ArticleInput object and add it to a new article in the articles collection. 
       This still needs to be done in the server-side 
    -->

<script>
import { gql } from 'graphql-tag'

export default {
  data() {
    return {
      title: '',
      content: '',
      ingredients: '',
      method: '',
      image: ''
    }
  },
  methods: {
    async handleSubmit() {
      const addArticleResponse = await this.$apollo.mutate({
        mutation: gql`
          mutation ($input: ArticleInput!) {
            addArticle(input: $input) {
              _id
            }
          }
        `,
        variables: {
          input: {
            title: this.title,
            content: this.content,
            ingredients: this.ingredients,
            method: this.method,
            image: this.image
          }
        }
      })
      console.log(addArticleResponse.data.addArticle._id)
    }
  }
}
</script>