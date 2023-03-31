<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Meal Types</h2>
                <li v-for="mealType in mealTypes.data" :key="mealType.id">
                        {{ mealType.attributes.type }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import mealTypeQuery from "~/apollo/queries/showcase/mealType";
  
  export default {
    data() {
      return {
        mealTypes: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
        mealTypes: {
        prefetch: true,
        query: mealTypeQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>