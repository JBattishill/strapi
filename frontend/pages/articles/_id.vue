<template>
  <div>
    <div class="imageContainer">
    <div
      v-if="article.data.attributes.image.data"
      class="headerImage uk-align-center uk-width-expand uk-height-medium uk-margin-small"
      :data-src="api_url + article.data.attributes.image.data.attributes.url"
      uk-img>
    </div>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
      <p class="uk-heading-large uk-text-center uk-padding-small">{{ article.data.attributes.title}}</p>

        <!-- successfully pulling all components of Recipe/Article -->
        <div class="uk-padding-small" v-if="article.data.attributes.category" id="editor" v-html="$md.render(article.data.attributes.category)"></div>
        <div class="uk-padding-small" v-if="article.data.attributes.content" id="editor" v-html="$md.render(article.data.attributes.content)"></div>
        <div class="uk-padding-small" v-if="article.data.attributes.ingredients" id="editor" v-html="$md.render(article.data.attributes.ingredients)"></div>
        <div class="uk-padding-small" v-if="article.data.attributes.method" id="editor" v-html="$md.render(article.data.attributes.method)"></div>
        <p v-if="article.data.publishedAt"> {{ article.data.attributes.publishedAt }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/article";

export default {
  data() {
    return {
      article: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    article: {
      prefetch: true,
      query: articlesQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      },
    },
  },
};
</script>
