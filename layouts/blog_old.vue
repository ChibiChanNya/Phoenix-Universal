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
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      clipped-left
      :clipped-right="false"
      fixed
      app
    >
      <nuxt-link to="/" class="flex mr-1">
        <v-img :src="require('@/assets/img/logo-dark-h.png')" contain max-height="100%" min-width="80px" max-width="150px"/>
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
               :to="item.to"
               :key="i"
               router
               exact
               flat>{{item.title}}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>


    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>

    <!-- BLOG SIDEBAR-->
    <v-navigation-drawer
      v-model="blog_drawer"
      fixed
      right
      clipped
      app
      class="nav-gray"
    >
      <v-list two-line id="blog-sidebar">
        <v-subheader>Posts recientes</v-subheader>

        <v-list-tile avatar v-for="post in recent_posts" :key="post.id" @click="" ripple>
          <v-list-tile-content>
            <v-list-tile-title>{{post.title.rendered}}</v-list-tile-title>
            <v-list-tile-sub-title><span v-html="post.excerpt.rendered"></span></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
      <v-divider></v-divider>

    </v-navigation-drawer>

    <!--FACEBOOK MESSENEGR-->
    <div class="fb-customerchat" page_id="691184954595484" logged_in_greeting=""></div>

    <!--FOOTER START-->
    <v-footer
      dark
      height="auto"
      style="z-index:4"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="phoenix-blue px-5">
          <strong class="subheading">¡Visítanos en nuestras redes sociales!</strong>

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
        blog_drawer: null,
        drawer: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'important_devices', title: 'Proyectos', to: '/projects' },
          { icon: 'face', title: 'Sobre Nosotros', to: '/about' },
          { icon: 'description', title: 'Blog', to: '/blog' },
          { icon: 'group work', title: "pages.services", to: 'services-web-development' }
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

        recent_posts:[],
      }
    },
    computed: {
      navTitle() {
        return this.$store.state.navTitle
      }
    },

   async mounted(){
      // Setup Elevator
      let elevator = new Elevator({
        element: document.querySelector('#nav_title'),
        // mainAudio: 'http://tholman.com/elevator.js/music/elevator.mp3',
        // endAudio 'http://tholman.com/elevator.js/music/ding.mp3',
        mainAudio: '/mp3/elevator.mp3',
        endAudio: '/mp3//ding.mp3',
        volume: 0.1,
      });
    //  Fill sidebar
    //  get posts
      let url = `https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=5&page=1`;
      let data = await this.$axios.get(url);
      this.recent_posts = data.data;
    },



  }
</script>

<style>

  #contact-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  #blog-sidebar .v-subheader{
    font-size: 20px;
  }


</style>
