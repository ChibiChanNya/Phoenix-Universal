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

    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px" light>
        <v-btn slot="activator" fixed bottom right ripple dark fab color="#d83b00">
          <v-icon dark>message</v-icon>
        </v-btn>
        <v-card>
          <v-card-title class="pb-0">
            <span class="headline text-xs-center">Envíanos un mensaje si tienes cualquier duda o quieres una cotización</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12>
                  <v-text-field label="Nombre*" hint="Nombre y apellidos" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Empresa" hint="Empresa a la cual representas" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email*" required hint="Dirección de correo electrónico"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea label="Mensaje*" required></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
            <small class="red--text">*Campo requerido</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#0db7cd" flat @click="dialog = false">Enviar</v-btn>
            <v-btn color="#0db7cd" flat @click="dialog = false">Cancelar</v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

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
        <v-card-title class="phoenix-blue">
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
          &copy;2018 —  <strong> Pho Consulting Services S. de R.L. de C.V.</strong>
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
        dialog: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'important_devices', title: 'Proyectos', to: '/projects' },
          { icon: 'face', title: 'Sobre Nosotros', to: '/about' },
          { icon: 'description', title: 'Blog', to: '/blog' },
          { icon: 'store', title: 'Academy', to: '/academy' }
        ],
        social_icons:[
          {type: "Facebook", icon:'fab fa-facebook-f', url:"https://www.facebook.com/Phoenix-Development-691184954595484/"},
          {type: "Instagram", icon:'fab fa-instagram', url:"https://www.instagram.com/phoenixdevelopmentcompany/?hl=es-la"},

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

<style>

  #contact-btn{
    position: absolute;
    right:20px;
    bottom:20px;
  }

</style>
