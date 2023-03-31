<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Cuisines</h2>
                <li v-for="category in categories.data" :key="category.id">
                        {{ category.attributes.name }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import cuisineQuery from "~/apollo/queries/category/categories";
  
  export default {
    data() {
      return {
        categories: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
        categories: {
        prefetch: true,
        query: cuisineQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>