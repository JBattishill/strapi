<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Medical Conditions</h2>
                <li v-for="medicalCondition in medicalConditions.data" :key="medicalCondition.id">
                        {{ medicalCondition.attributes.name }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import medicalConditionQuery from "~/apollo/queries/showcase/medicalCondition";
  
  export default {
    data() {
      return {
        medicalConditions: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
        medicalConditions: {
        prefetch: true,
        query: medicalConditionQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>