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

    <section class="">

<!--      <v-img :src="require('~/assets/img/projects/Thulio Splash.jpg')"-->
<!--             alt="Thulio.mx Header"-->
<!--             height="75vh"-->
<!--             class="mb-3"-->
<!--      >-->
<!--        <v-container style="height:100%;">-->

<!--          <v-layout-->
<!--            column-->
<!--            class="black&#45;&#45;text"-->
<!--            pa-2-->
<!--            fill-height-->
<!--          >-->
<!--            <v-flex v-vpshow="'bouncneInDown'">-->
<!--              <h2 class="client-name" > - Thulio.mx -</h2>-->
<!--            </v-flex>-->
<!--            <v-flex>-->
<!--              &lt;!&ndash;<v-img :src="require('~/assets/img/projects/Thulio Logotm.png')" position="left" contain height="150px"&ndash;&gt;-->
<!--                     &lt;!&ndash;alt="Thulio Logo" aspect-ratio="1"></v-img>&ndash;&gt;-->
<!--            </v-flex>-->
<!--            <v-flex md4 v-vpshow="'bounceInUp'">-->
<!--              <h1 class="white&#45;&#45;text" style="text-shadow: 0 0 1px black;">Plataforma de E-commerce para venta de-->
<!--                accesorios de Marihuana</h1>-->
<!--            </v-flex>-->

<!--          </v-layout>-->
<!--        </v-container>-->

<!--      </v-img>-->
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
<!--            <v-img :src="require('~/assets/img/projects/Thulio-1.png')" height="800px">-->

<!--            </v-img>-->
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section class="mt-4 grey lighten-2">

<!--      <v-img :src="require('~/assets/img/projects/futhub_design.jpg')"-->
<!--             alt="Thulio.mx Header"-->
<!--             height="75vh"-->
<!--             class="mb-3"-->
<!--      >-->
<!--        <v-container style="height:100%;">-->

<!--          <v-layout-->
<!--            column-->
<!--            class="white&#45;&#45;text"-->
<!--            pa-2-->
<!--            fill-height-->
<!--            justify-start-->
<!--          >-->
<!--            <v-flex>-->
<!--              <v-img :src="require('~/assets/img/projects/futhub_logo.png')" position="left" contain height="150px"-->
<!--              alt="Thulio Logo" aspect-ratio="1"></v-img>-->
<!--            </v-flex>-->

<!--          </v-layout>-->
<!--        </v-container>-->

<!--      </v-img>-->
      <v-container>
        <div class="text-xs-center mb-5">
          <h1 class="site-title mb-2" style="font-weight:700" v-vpshow="'fadeInUp'">FUTHUB</h1>
          <h2 class="site-subtitle mb-3 dev-text" v-vpshow="'fadeInUp'">Slogan de Futhub...</h2>
          <v-flex md10 xs10 class="ma-auto text-xs-justify" >
            <p class="site-desc text-xs-center" v-vpshow="'fadeInUp'">
              Red Profesional que conecta a jugadores, entrenadores y equipos de futbol profesional y amateur.
            </p>
          </v-flex>
        </div>

        <v-layout row wrap>

          <v-flex xs12 md6 pa-4>
            <div class="sticky">
              <h2 class="headline text-md-center mb-3">Encabezado aqui...</h2>
              <p class="site-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Vivamus porttitor turpis ac leo. Integer lacinia. Nunc dapibus tortor vel mi dapibus sollicitudin. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam quis quam. Nulla non lectus sed nisl molestie malesuada.</p>
            </div>
          </v-flex>
          <v-flex xs12 md6 class="grey lighten-3" v-vpshow="'flipInY'">
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/zpaGSQDiNQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
