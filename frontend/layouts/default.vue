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
            <a href="/"><img class="toplogo uk-width-3-4@s uk-width-1-2@m uk-width-3-4@l" src="../../frontend/static/whitecnlogo.png" alt="Choose Nourish Logo."/></a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-center uk-visible@s uk-width-1-4">
        <ul class="uk-navbar-nav">
         <li>
         <a href="/navs/easybreezy">Easy Breezy</a>
         </li>
         <li>
         <a href="/navs/recipes">Recipes</a>
         </li>
         <li>
         <a href="/navs/entertaining">Entertaining</a>
         </li>
        </ul>
      </div>

      <div class="uk-navbar-right uk-visible@s uk-width-1-4">
        <ul class="uk-navbar-nav uk-child-width-1-8">
          <li>
          <a href="/account/login">Login</a>
        </li>
        <li>
          <a href="/account/signup">Signup</a>
        </li>

        </ul>
      </div>
    </nav>

    <div id="modal-full" class="uk-modal-full uk-hidden@s" uk-modal>
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
                <li>
                <a href="/navs/easybreezy">Easy & Breezy</a>
                </li>
                <li>
                <a href="/navs/recipes">Recipes</a>
                </li>
                <li>
                <a href="/navs/entertaining">Entertaining</a>
                </li>
                <li>
                <a href="/account/login">Login</a>
              </li>
              <li>
                <a href="/account/signup">Signup</a>
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