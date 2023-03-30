<template>
  <div class="">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left uk-width-1-2">
        <ul class="uk-navbar-nav uk-padding-small">
          <li>
            <a href="#modal-full" uk-toggle
              ><span uk-icon="icon: table"></span
            ></a>
          </li>
          <li>
            <a href="/"><img class="toplogo" src="../../frontend/static/whitecnlogo.png" alt="Choose Nourish Logo."/></a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li v-for="nav in navs.data" :key="nav.id">
            <NuxtLink 
              :to="{ name: 'nav-id', params: { id: nav.id } }"
              >{{ nav.attributes.Item }}
            </NuxtLink>
          </li>
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
                    :to="{ name: 'nav-id', params: { id: nav.id } }"
                    >{{ nav.attributes.Item }}
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

export default {
  data() {
    return {
      navs: {
        data: [],
      },
    };
  },
  apollo: {
    navs: {
      prefetch: true,
      query: navsQuery,
    },
  },
};
</script>
