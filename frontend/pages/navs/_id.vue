<template>
    <div>
      <client-only>
        <div class="uk-section">
            <div class="uk-container uk-container-large">
              <p class="uk-text-large">This is where you will find a page for {{ nav.data.attributes.Item}} </p>
              </div>
            </div>
        </client-only>
    </div>
</template>

<script>
import navsQuery from "~/apollo/queries/nav/navLinks";

export default {
  data() {
    return {
      nav: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    nav: {
      prefetch: true,
      query: navsQuery,
      variables() {
            return { id: parseInt(this.$route.params.id) };
        },
    },
  },
};
</script>