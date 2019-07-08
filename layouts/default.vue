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
          :to="localePath('')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('pages.home')"/>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-model="dropdown.active"
          :prepend-icon="dropdown.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t(dropdown.title) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
            v-for="subItem in dropdown.options"
            :key="subItem.title"
            :to="localePath(subItem.to)"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>{{ subItem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(subItem.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <template v-for="(item, i) in items">

          <v-list-tile
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
        </template>


        <!--Translate Buttons-->
        <v-list-tile v-if="$i18n.locale !== 'en'"
                     :to="switchLocalePath('en')"
                     router
                     exact>
          <v-list-tile-action>
            <v-icon>translate</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              English
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="$i18n.locale !== 'es'"
                     :to="switchLocalePath('es')"
                     router
                     exact>
          <v-list-tile-action>
            <v-icon>translate</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              Español
            </v-list-tile-title>
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
        <v-img :src="require('@/assets/img/logo-dark-h.png')" class="mr-3" contain max-height="100%" min-width="80px"
               max-width="150px"/>
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

        <v-menu open-on-hover bottom :nudge-bottom="50" transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-btn flat v-on="on">
              <span>{{ $t(dropdown.title) }}</span>
              <v-icon dark>arrow_drop_down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile
              v-for="(item, index) in dropdown.options"
              :key="index"
              router
              exact
              :to="localePath(item.to)"
            >
              <v-list-tile-title v-text="$t(item.title)"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

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
    <div class="fb-customerchat" logged_in_greeting="Hola ¿Cómo podemos ayudarte?" page_id="691184954595484"></div>

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

        <v-card-actions class="grey darken-3 justify-space-between">
          <span>&copy;2019 — <strong>PHO Consulting Services Company S. de R.L. de C.V.</strong></span>
          <v-btn depressed color="transparent" class="align-self-center elevator">Volver Arriba</v-btn>
          <!--<v-spacer></v-spacer>-->
          <nuxt-link to="privacy" class="white--text">Aviso de Privacidad</nuxt-link>
        </v-card-actions>
      </v-card>
    </v-footer>
    <!-- FOOTER END-->
  </v-app>
</template>

<script>
  export default {

    // Adjust translated SEO content
    head () {
      return this.$nuxtI18nSeo()
    },

    data() {
      return {
        drawer: false,
        items: [
          // { icon: 'important_devices', title: 'pages.projects', to: 'projects' },
          { icon: 'face', title: 'pages.about_us', to: 'about' },
          // { icon: 'description', title: 'pages.blog', to: 'blog' }

        ],
        dropdown: {
          icon: 'work', title: 'pages.services', active: false,
          options: [
            { title: 'pages.web_development', to: 'services-web-dev', icon: 'web' },
            { title: 'pages.mobile_development', to: 'services-mobile-dev', icon: 'smartphone' },
            { title: 'pages.online_marketing', to: 'services-online-marketing', icon: 'share' },
            { title: 'pages.company_image', to: 'services-company-image', icon: 'portrait' },
            // { title: 'pages.consulting', to: 'services-consulting', icon: 'help' },
            { title: 'pages.motion_graphics', to: 'services-motion-graphics', icon: 'play_arrow' },
          ]
        },
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
        ]
      }
    },
    computed: {
      navTitle() {
        return this.$store.state.navTitle
      }
    },

    mounted() {
      let elevator = new Elevator({
        element: document.querySelector('.elevator'),
        mainAudio: '/mp3/elevator.mp3',
        endAudio: '/mp3//ding.mp3',
        volume: 0.1

      })
    }


  }
</script>

<style>

  #contact-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }


</style>
