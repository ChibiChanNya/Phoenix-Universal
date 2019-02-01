<template>
  <v-app light>

    <v-navigation-drawer
      clipped
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="localePath(item.to)"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(item.title)"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="true"
      fixed
      app
    >
      <nuxt-link to="/" class="flex">
        <v-img :src="require('@/assets/img/logo-dark-h.png')" class="mr-3" contain max-height="100%" min-width="80px" max-width="150px"/>
      </nuxt-link>

      <span id="nav_title" class="clickable">
      <transition name="title" mode="out-in" enter-active-class="animated bounceIn"
                  leave-active-class="animated fadeOut" :duration="{ enter: 600, leave: 200 }">
        <v-toolbar-title :key="navTitle">
          {{navTitle}}
        </v-toolbar-title>
      </transition>
        </span>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn v-for="(item, i) in items"
               :to="localePath(item.to)"
               :key="i"
               router
               exact
               flat>{{ $t(item.title) }}
        </v-btn>
        <v-btn v-if="$i18n.locale !== 'en'"
               :to="switchLocalePath('en')"
               router
               exact
               flat>English
        </v-btn>
        <v-btn v-if="$i18n.locale !== 'es'"
               :to="switchLocalePath('es')"
               router
               exact
               flat>Español
        </v-btn>

      </v-toolbar-items>

      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>


    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>

    <!--FACEBOOK MESSENEGR-->
    <div class="fb-customerchat" page_id="691184954595484" logged_in_greeting=""></div>

    <!--FOOTER START-->
    <v-footer
      dark
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="phoenix-blue px-5">
          <strong class="subheading">{{ $t('footer.social_msg') }}</strong>

          <v-spacer></v-spacer>

          <div class="mr-5">
            <v-btn
              v-for="(icon,i) in social_icons"
              :key="i"
              class="mx-3"
              dark
              icon
              :href="icon.url"
              target="_blank"
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </div>

        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong> Pho Consulting Services S. de R.L. de C.V.</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
    <!-- FOOTER END-->
  </v-app>
</template>

<script>
  export default {


    data() {
      return {
        drawer: false,
        items: [
          { icon: 'home', title: 'pages.home', to: 'index' },
          { icon: 'important_devices', title: "pages.projects", to: 'projects' },
          { icon: 'face', title: "pages.about_us", to: 'about' },
          { icon: 'description', title: "pages.blog", to: 'blog' },
          { icon: 'store', title: "pages.academy", to: 'academy' }
        ],
        social_icons: [
          {
            type: 'Facebook',
            icon: 'fab fa-facebook-f',
            url: 'https://www.facebook.com/Phoenix-Development-691184954595484/'
          },
          {
            type: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/phoenixdevelopmentcompany/?hl=es-la'
          }
        ],
      }
    },
    computed: {
      navTitle() {
        return this.$store.state.navTitle
      }
    },

    mounted(){
      let elevator = new Elevator({
        element: document.querySelector('#nav_title'),
        // mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
        // endAudio: 'http://tholman.com/elevator.js/music/ding.mp3',

        mainAudio: '/mp3/elevator.mp3',
        endAudio: '/mp3//ding.mp3',
        volume: 0.1,

      });
    },



  }
</script>

<style>

  #contact-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }


</style>
