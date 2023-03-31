<template>
  <div class="">
    <nav class="uk-navbar-container headerbg" uk-navbar>
      <div class="uk-navbar-left uk-width-1-1">
        <ul class="uk-navbar-nav uk-padding-small">
          <li>
            <a class="uk-hidden@s" href="#modal-full" uk-toggle
              ><span uk-icon="icon: table"></span
            ></a>
          </li>
          <li>
            <a href="/"><img class="toplogo" src="../../frontend/static/whitecnlogo.png" alt="Choose Nourish Logo."/></a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-center uk-visible@s uk-width-1-4">
        <ul class="uk-navbar-nav">
          <li v-for="nav in navs.data" :key="nav.id">
            <NuxtLink 
              :to="{ name: 'navs-id', params: { id: nav.id } }"
              >{{ nav.attributes.Item }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right uk-visible@s uk-width-1-4">
        <ul class="uk-navbar-nav uk-child-width-1-8">
          <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
          <!-- <li v-for="signin in signins.data" :key="signin.id">
                  <NuxtLink
                    class="uk-modal-close"
                    :to="{ name: 'signins-id', params: { id: signin.id } }"
                    >{{ signin.attributes.item }}
                  </NuxtLink>
                </li> -->
        </ul>
      </div>
    </nav>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close
        ></button>
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid
        >
          <div class="uk-padding-large">
            <h3>The Collapsed Menu</h3>
            
            <div class="uk-width-1-2@s">
              <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                <li v-for="nav in navs.data" :key="nav.id">
                  <NuxtLink
                    class="uk-modal-close"
                    :to="{ name: 'navs-id', params: { id: nav.id } }"
                    >{{ nav.attributes.Item }}
                  </NuxtLink>
                </li>
                <li v-for="signin in signins.data" :key="signin.id">
                  <NuxtLink
                    class="uk-modal-close"
                    :to="{ name: 'signins-id', params: { id: signin.id } }"
                    >{{ signin.attributes.item }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <p class="uk-text-light">Bottom menu - default.vue - line 60</p>
          </div>
        </div>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import navsQuery from "~/apollo/queries/nav/navs";
import signinQuery from "~/apollo/queries/signin/signins";

export default {
  data() {
    return {
      navs: {
        data: [],
      },
      signins: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    navs: {
      prefetch: true,
      query: navsQuery,
      variables() {
            return { id: parseInt(this.$route.params.id) };
        },
    },
    signins: {
      prefetch: true,
      query: signinQuery,
      variables() {
            return { id: parseInt(this.$route.params.id) };
        },
    },
  },
};
</script>
