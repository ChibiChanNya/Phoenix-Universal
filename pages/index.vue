<template>
  <div>
    <!-- HERO SECTION START-->
    <section>
      <v-parallax :src="require('@/assets/img/hero.jpg')" height="600">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <img src="~/assets/img/logo-light-v.png" alt="Phoenix Development Logo" height="200">
          <no-ssr>
            <vue-typer class="mb-2" :text='["CREA", "TRANSFORMA", "EVOLUCIONA"]' :repeat="1" :pre-type-delay="500"
                       :type-delay=150></vue-typer>
          </no-ssr>

          <div class="subheading mb-3 text-xs-center">Powered by Phoenix</div>

          <v-btn
            class="phoenix mt-5"
            large
            light
            color="#d83b00"
            href="#"
          >
            Conócenos
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <!-- HERO SECTION END-->

    <!-- SERVICES SECTION START-->
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1 class="headline mb-3">Nuestros Servicios</h1>
            <v-flex md6 xs10 class="ma-auto">
              <span class="subheading text-xs-justify">
                Para desarrollar proyectos que aporten valor a nuestros clientes, orientamos nuestro conocimiento a entender sus necesidades y las de sus consumidores ofreciendo soluciones en:
              </span>
            </v-flex>
          </div>
        </v-flex>

        <!-- START CARD LIST-->
        <v-container
          grid-list-xl
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
              md4 xs12
            >
              <v-card class="elevation-2 transparent pa-2" height="100%">
                <v-card-title primary-title class="layout ">
                  <v-icon x-large class="blue--text text--lighten-2 mr-4 ml-2">{{card.icon}}</v-icon>
                  <span class="headline">{{card.title}}</span>
                </v-card-title>
                <v-card-text>
                  <p class="margin-b-5">{{card.text}}</p>
                  <ul>
                    <li v-for="item in card.list">{{item}}</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <!-- END CARD LIST-->

      </v-layout>
    </section>
    <!-- SERVICES SECTION END-->

    <!-- WHY US SECTION START TODO-->
    <section>
      <v-parallax :src="require('@/assets/img/section.jpg')" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
          <em>Kick-start your application today</em>
          <v-btn
            class="blue lighten-2 mt-5"
            dark
            large
            href="/pre-made-themes"
          >
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <!-- WHY US SECTION END-->

    <!-- PROJECTS SECTION START-->
    <section class="py-5" id="projects">
      <v-layout
        align-center
        justify-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1 class="headline">Nuestros Proyectos</h1>
          </div>
        </v-flex>
      </v-layout>


      <v-layout align-center justify-center>
          <!-- INDICATORS START-->
          <v-item-group
            v-model="window"
            class="shrink mr-4 hidden-md-and-down"
            mandatory
          >
            <v-item
              v-for="(project, i) in projects"
              :key="i"
            >
              <div slot-scope="{ active, toggle }">
                <v-btn
                  :input-value="active"
                  icon
                  @click="toggle"
                  class="phoenix-blue"
                >
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </div>
            </v-item>
          </v-item-group>
          <!-- INDICATORS END-->

          <!-- CARDS START-->
          <v-flex xs12 md8>
            <v-window
              v-model="window"
            >
              <v-window-item
                v-for="(project, i) in projects"
                :key="i"
              >
                  <v-card-text>
                    <v-layout align-center mb-3>
                      <h2 class="headline">{{ project.title }}</h2>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </v-layout>

                    <h3 class="dev-text mh-75">{{project.text}}</h3>
                    <v-img :src="project.src"></v-img>
                  </v-card-text>
              </v-window-item>
            </v-window>
          </v-flex>
          <!--CARDS END-->

        </v-layout>
      <!-- INDICATORS FOR MOBILE-->
      <v-layout
       justify-center>
        <v-item-group
          v-model="window"
          class="shrink hidden-lg-and-up"
          style="display:flex"
          mandatory
        >
          <v-item
            v-for="(project, i) in projects"
            :key="i"
          >
            <div slot-scope="{ active, toggle }">
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
                class="phoenix-blue"
              >
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>
      </v-layout>




    </section>
    <!-- PROJECTS SECTION END-->

    <!-- CONTACT SECTION START-->
    <section>

      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!--CONTACT SECTION END-->


  </div>
</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {

    components: {
      'no-ssr': NoSSR
    },

    data() {
      return {
        title: 'Home',
        window: 0,
        cards: [
          {
            icon: 'code',
            title: 'Desarrollo Web',
            text: 'Diseño y desarrollo de:',
            list: ['Sitios Web', 'E-Commerce', 'Plataformas Innovadoras', 'Sistemas Empresariales']
          },
          {
            icon: 'code',
            title: 'Desarrollo Web',
            text: 'Diseño y desarrollo de:',
            list: ['Aplicaciones para iOS', 'Aplicaciones para Android', 'Aplicaciones Híbridas']
          },
          {
            icon: 'code',
            title: 'Marketing Digital',
            text: 'Creación, desarrollo y ejecución de Estrategias de Marketing Digital utilizando:',
            list: ['Inbound Marketing', 'Posicionamiento Web SEO/SEM', 'Campañas publicitarias', 'Social Media', 'Estrategia de contenidos']
          },
          {
            icon: 'code',
            title: 'Imagen Corporativa',
            text: 'Desarrollamos la identidad de tu compañía a través de la creación de:',
            list: ['Manual de Marca', 'Manual de Identidad Corporativa', 'Branding Corporativo']
          },
          {
            icon: 'code',
            title: 'Consultoría',
            text: 'Cursos y Capacitación en:',
            list: ['Creación y Desarrollo de Negocios', 'Imagen Corporativa', 'Marketing Digital']
          }
        ],
        projects: [
          {
            title: 'FUTHUB',
            text: 'Plataforma que conecta jugadores entrenadores y clubes de fútbol profesional.',
            src: require('@/assets/img/projects/FH.jpg')
          },
          {
            title: 'PROMTEL',
            text: 'Propuesta para Sitio Informativo del Organismo Promotor de Inversiones en Telecomunicaciones.',
            src: require('@/assets/img/projects/PROMTEL.jpg')
          },
          {
            title: 'AFER',
            text: 'Sitio Informativo AFER PLOMERÍA ESPECIALIZADA empresa de la Cd. de Chihuahua.',
            src: require('@/assets/img/projects/AFER.jpg')
          },
          {
            title: 'QUINIELA RUSIA 2018',
            text: 'Quiniela deportiva organizada para empleados de corporativos durante la Copa Mundial Rusia 2018. ',
            src: require('@/assets/img/projects/QUINIELA.jpg')
          },
          {
            title: 'GREEN PIT',
            text: 'Máquinas francesas para descarbonizar por medio de hidrógeno el motor de los automóviles. ',
            src: require('@/assets/img/projects/GREENPIT.jpg')
          }
        ]
      }
    },

    head() {
      return {
        title: this.title + ' - Phoenix Development',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    mounted() {
      this.$store.commit('rename', 'Home')
    }
  }
</script>

<style>

  .vue-typer {
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 3em;
  }

  .vue-typer .char.custom.typed {
    color: white;
    text-shadow: 1px 1px black, -1px -1px #444;
  }

  .vue-typer .custom.caret {
    background-color: white;
  }

  #projects{
    background: #ffff;
  }



</style>
