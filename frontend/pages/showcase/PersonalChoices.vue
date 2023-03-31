<template>
  <div>
      <div class="uk-section">
          <div class="uk-container uk-container-small">
              <h2>Personal Choices</h2>
              <li v-for="personalchoice in personalchoices.data" :key="personalchoice.id">
                      {{ personalchoice.attributes.name }}
              </li>
          </div>
      </div>
  </div>
</template>

<script>
import personalChoicesQuery from "~/apollo/queries/showcase/PersonalChoices";

export default {
  data() {
    return {
      personalchoices: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    personalchoices: {
      prefetch: true,
      query: personalChoicesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>