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
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="true"
      fixed
      app
    >
      <v-img :src="require('@/assets/img/logo-dark-h.png')" contain max-height="100%" max-width="150px" />

      <v-toolbar-title>
        {{navTitle}}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn v-for="(item, i) in items"
               :to="item.to"
               :key="i"
               router
               exact
               flat>{{item.title}}</v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up" />


    </v-toolbar>
    <v-content>
        <nuxt />
    </v-content>

    <!--FOOTER START-->
    <v-footer
      :fixed="false"
      class="blue darken-2 pa-3"
    >
        <span>&copy;2019 - <strong>Phoenix Development</strong> </span>
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
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'important_devices', title: 'Proyectos', to: '/projects' },
          { icon: 'face', title: 'Sobre Nosotros', to: '/about' },
          { icon: 'description', title: 'Blog', to: '/blog' },
          { icon: 'store', title: 'Academy', to: '/academy' }
        ],
      }
    },
    computed: {
      navTitle () {
        return this.$store.state.navTitle;
      }
    },

    mounted(){
      console.log("MOUNTED",this.$route.matched);
    }
  }
</script>
