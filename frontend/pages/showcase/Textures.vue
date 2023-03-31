<template>
    <div>
        <div class="uk-section">
            <div class="uk-container uk-container-small">
                <h2>Textures</h2>
                <li v-for="texture in textures.data" :key="texture.id">
                        {{ texture.attributes.name }}
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
  import textureQuery from "~/apollo/queries/showcase/textures";
  
  export default {
    data() {
      return {
        textures: {
          data: [],
        },
        api_url: process.env.strapiBaseUri,
      };
    },
    apollo: {
        textures: {
        prefetch: true,
        query: textureQuery,
        variables() {
          return { id: parseInt(this.$route.params.id) };
        },
      },
    },
  };
</script>