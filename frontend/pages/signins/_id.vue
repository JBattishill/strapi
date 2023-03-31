<template>
    <div>
      <client-only>
        <div class="uk-section">
            <div class="uk-container uk-container-large">
              <p class="uk-text-large">This is where you will find a page for the user to {{ signin.data.attributes.item}} </p>
              </div>
            </div>
        </client-only>
    </div>
</template>

<script>
import signinQuery from "~/apollo/queries/signin/signLinks";

export default {
  data() {
    return {
      signin: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    signin: {
      prefetch: true,
      query: signinQuery,
      variables() {
            return { id: parseInt(this.$route.params.id) };
        },
    },
  },
};
</script>
