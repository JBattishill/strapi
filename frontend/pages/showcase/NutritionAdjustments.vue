<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Nutrition Adjustments</h2>
                <li v-for="nutritionAdjustment in nutritionAdjustments.data" :key="nutritionAdjustment.id">
                        {{ nutritionAdjustment.attributes.name }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import nutritionAdjustmentQuery from "~/apollo/queries/showcase/nutritionAdjustments";
  
  export default {
    data() {
      return {
        nutritionAdjustments: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
      nutritionAdjustments: {
        prefetch: true,
        query: nutritionAdjustmentQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>