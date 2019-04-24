<template>

  <div id="dev">
    <section id="web-development-hero" class="phoenix-orange">
      <v-parallax :src="require('@/assets/img/services/web_dev_banner.jpeg')" height="380">
        <v-layout
          column
          align-center
          justify-center
          class="phoenix-text"
          style="text-shadow: 1px 1px 1px black"
        >
          <h1 class="large-headline">Diseño y Desarrollo profesional de Páginas y Aplicaciones Web</h1>

          <div class="subheading my-3 text-xs-center white--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet arcu sit amet volutpat tincidunt.
          </div>

          <v-btn
                 class="phoenix-blue mt-5"
                 dark
                 large
                 color="#0db7cd"
                 href="#"
          >
            Solicita una cotización
          </v-btn>

        </v-layout>
      </v-parallax>
    </section>

    <section id="responsive-design">
      <v-container md8>
        <v-layout row align-center justify-space-around>
          <v-flex md5>
            <h2 class="headline mb-2" >Diseño Responsivo</h2>
            <p>
              Over 50 percent of web users search from their phones. If your website lacks a responsive design, it won’t display well on phones. You’ll lose sales and leads when users have to pinch and zoom. With our responsive web design services, you get a polished design so you can maximize conversions.
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Professional Display on any Screen
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Professional Display on any Screen
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Improved Search Rankings
                </v-layout>
              </li>            </ul>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md5>
            <v-img src="https://www.smart-contech.com/wp-content/uploads/2016/08/web-design.png" contain height="300px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="e-commerce" class="white">
      <v-container md8>
        <v-layout row align-center justify-space-around reverse>
          <v-flex md5>
            <h2 class="headline mb-2" >E-commerce</h2>
            <p>
              Over 50 percent of web users search from their phones. If your website lacks a responsive design, it won’t display well on phones. You’ll lose sales and leads when users have to pinch and zoom. With our responsive web design services, you get a polished design so you can maximize conversions.
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Professional Display on any Screen
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Professional Display on any Screen
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon> Improved Search Rankings
                </v-layout>
              </li>            </ul>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md5>
            <v-img src="https://www.smart-contech.com/wp-content/uploads/2016/08/web-design.png" contain height="300px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


  </div>


</template>

<script>

  export default {

    transition: {
      name: 'flip',
      enterActiveClass: 'animated flipInX',
      leaveActiveClass: 'animated flipOutX'
    },


    head: {
      title: 'Desarrollo Web'
    },

    name: 'web-development',

    data() {
      return {
        countWord: 0
      }
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.web_development'))
    },

    methods: {

    },

  }


</script>

<style lang="scss">



</style>
