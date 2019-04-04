<template>
  <div>
    <v-layout justify-center>
      <div class="text-xs-center my-4">
        <h1 class="headline mb-3">{{$t('projects.header')}}</h1>
        <v-flex md10 xs10 class="ma-auto">
              <span class="subheading text-xs-justify">
                {{$t('projects.subheader')}}
              </span>
        </v-flex>
      </div>
    </v-layout>

    <section>

      <v-img :src="require('~/assets/img/projects/Thulio Splash.jpg')"
             alt="Thulio.mx Header"
             height="75vh"
             class="mb-3"
      >
        <v-container style="height:100%;">

          <v-layout
            column
            class="black--text"
            pa-2
            fill-height
          >
            <v-flex v-vpshow="'bounceInDown'">
              <h2 class="client-name" > - Thulio.mx -</h2>
            </v-flex>
            <v-flex>
              <!--<v-img :src="require('~/assets/img/projects/Thulio Logotm.png')" position="left" contain height="150px"-->
                     <!--alt="Thulio Logo" aspect-ratio="1"></v-img>-->
            </v-flex>
            <v-flex md4 v-vpshow="'bounceInUp'">
              <h1 class="white--text" style="text-shadow: 0 0 1px black;">Plataforma de E-commerce para venta de
                accesorios de Marihuana</h1>
            </v-flex>

          </v-layout>
        </v-container>

      </v-img>
      <v-container>
        <div class="text-xs-center mb-5">
          <h1 class="site-title mb-2" style="font-weight:700" v-vpshow="'fadeInUp'">THULIO</h1>
          <h2 class="site-subtitle mb-3 dev-text" v-vpshow="'fadeInUp'">Delivering Happiness</h2>
          <v-flex md10 xs10 class="ma-auto text-xs-justify" >
              <p class="site-desc" v-vpshow="'fadeInUp'">
                Una empresa mexicana comprometida con el consumo  educado y responsable del cannabis a través de la educación y tecnología.
              </p>
          </v-flex>
        </div>

        <v-layout row wrap>

          <v-flex xs12 md6 pa-4>
            <div class="sticky">
              <h2 class="headline text-md-center mb-3">Encuentra todo en un sólo lugar</h2>
              <p class="site-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Vivamus porttitor turpis ac leo. Integer lacinia. Nunc dapibus tortor vel mi dapibus sollicitudin. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis quam. Nulla non lectus sed nisl molestie malesuada.</p>
            </div>
            </v-flex>
          <v-flex xs12 md6 class="grey lighten-3 pa-4" v-vpshow="'flipInY'">
            <v-img :src="require('~/assets/img/projects/Thulio-1.png')" height="800px">

            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>


  </div>

</template>

<script>
  export default {

    transition: {
      name: 'bounce',
      enterActiveClass: 'animated bounceInDown',
      leaveActiveClass: 'animated bounceOutUp'
    },

    head: {
      title: 'Proyectos'
    },

    name: 'projects',

    mounted() {
      this.$store.commit('rename', this.$t('pages.projects'))
    }
  }


</script>

<style>

  .site-title{
    color: #d83b00;
    font-size: 40px;
    line-height: 50px;
  }

  .site-subtitle{
    color: #0db7cd;
    font-size: 28px;
    line-height: 40px;
    font-style:italic;
  }

  p.site-desc{
    font-size: 16px;
  }

  .sticky{
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
  }

</style>
