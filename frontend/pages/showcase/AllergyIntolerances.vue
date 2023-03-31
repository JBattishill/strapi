<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Allergies and Intolerances</h2>
                <li v-for="allergyIntolerance in allergyIntolerances.data" :key="allergyIntolerance.id">
                        {{ allergyIntolerance.attributes.name }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import allergyQuery from "~/apollo/queries/showcase/AllergyIntolerance";
  
  export default {
    data() {
      return {
        allergyIntolerances: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
        allergyIntolerances: {
        prefetch: true,
        query: allergyQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>