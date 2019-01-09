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
    <section id="services">
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
              v-for="(card, index) in cards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
              md4 xs12
            >
              <v-card class=" pa-2" height="100%" v-vpshow="'flipInY'" hover>
                <v-card-title primary-title class="layout ">
                  <v-icon x-large class="dev-text mr-4 ml-2">{{card.icon}}</v-icon>
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
          <div class="headline white--text mb-3 text-xs-center" v-vpshow="'rollIn'">Web development has never been
            easier
          </div>
          <em v-vpshow="'rollIn'">Kick-start your application today</em>

          <v-btn v-vpshow="'rollIn'"
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
            v-vpshow="'rotateInUpRight'"
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

      <v-container grid-list-xl fluid v-vpshow="'fadeInLeft'">

        <v-layout
          align-center
          justify-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline">Ponte en Contacto</h1>
            </div>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm5>
            <GmapMap
                     :center="map.center"
                     :zoom="15"
                     map-type-id="roadmap"
                     :options="map.map_options"
                     style="width: 100%; height: 100%; color: black"
            >
              <gmap-info-window :options="map.infoOptions" :position="map.infoWindowPos" :opened="map.infoWinOpen"
                                @closeclick="map.infoWinOpen=false">
                Av. Paseo de la Reforma 389 Piso 10, <br> Col. Cuauhtemoc CP 06500, <br> Ciudad de México, México
              </gmap-info-window>

              <gmap-marker :key="i" v-for="(m,i) in map.markers" :position="m.position" :clickable="true"
                           @click="toggleInfoWindow(m,i)"></gmap-marker>
            </GmapMap>
          </v-flex>
          <v-flex xs12 sm5>
            <v-layout column>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>(+52) 5980 3626</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Paseo de la Reforma 389 piso 10, CDMX, México</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>contacto@phoenixdevelopment.mx</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="my-3">
                  <v-list-tile-action class="mx-auto">
                    <!-- FIXED BOTTOM RIGHT DIALOG BUTTON + POPUP -->
                    <v-dialog v-model="dialog" persistent max-width="800px" dark>
                      <v-btn slot="activator" round large="" dark color="#d83b00" class="pa-4 mx-auto">
                        <v-icon class="mr-3">message</v-icon>
                        Ponte en contacto
                      </v-btn>
                      <v-card-title class="pb-0">
                            <span
                              class="headline text-xs-center">
                              Envíanos un mensaje si tienes cualquier duda o quieres una cotización
                            </span>
                      </v-card-title>
                      <v-card-text class="pb-0">
                        <v-container grid-list-md class="pb-0">
                          <v-form v-model="contact.valid" ref="form">
                            <v-layout wrap>
                              <v-flex xs12>
                                <v-text-field outline light label="Nombre*" v-model="contact.name"
                                              hint="Nombre y apellidos" color="#0db7cd" required
                                              :rules="contact.rules.name"></v-text-field>
                              </v-flex>
                              <v-flex xs12 md6>
                                <v-text-field outline light label="Empresa" v-model="contact.company"
                                              hint="Empresa a la cual representas" color="#0db7cd"
                                              required></v-text-field>
                              </v-flex>
                              <v-flex xs12 md6>
                                <v-text-field outline="" light label="Email*" required v-model="contact.email"
                                              hint="Dirección de correo electrónico" color="#0db7cd"
                                              :rules="contact.rules.email">
                                </v-text-field>
                              </v-flex>
                              <v-flex xs12>
                                <v-textarea outline light label="Mensaje*" color="#0db7cd" v-model="contact.message"
                                            required :rules="contact.rules.message"></v-textarea>
                              </v-flex>
                            </v-layout>
                          </v-form>

                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <small class="red--text">*Campo requerido</small>
                        <v-spacer></v-spacer>
                        <v-btn color="#0db7cd" round @click="submit_contact">Enviar</v-btn>
                        <v-btn color="#0db7cd" round @click="dialog = false">Cancelar</v-btn>

                      </v-card-actions>
                    </v-dialog>
                    <!-- END FIXED DIALOG BUTTON-->
                  </v-list-tile-action>

                </v-list-tile>
              </v-list>
            </v-layout>
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

    transition: {
      name: 'zoom',
      enterActiveClass: 'fadeIn animated',
      leaveActiveClass: 'fadeOut animated'
    },


    head: {
      title: 'Inicio'
    },

    components: {
      'no-ssr': NoSSR
    },

    data() {
      return {
        dialog: false,
        window: 0,
        contact: {
          name: '',
          company: '',
          email: '',
          message: '',
          valid: false,

          rules: {
            name: [
              v => !!v || 'Nombre obligatorio'
            ],
            email: [
              v => !!v || 'E-mail obligatorio',
              v => /.+@.+\..+/.test(v) || 'E-mail inválido'
            ],
            message: [
              v => !!v || 'Mensaje obligatorio'
            ]
          }
        },
        cards: [
          {
            icon: 'code',
            title: 'Desarrollo Web',
            text: 'Diseño y desarrollo de:',
            list: ['Sitios Web', 'E-Commerce', 'Plataformas Innovadoras', 'Sistemas Empresariales']
          },
          {
            icon: 'fas fa-mobile-alt',
            title: 'Desarrollo Móvil',
            text: 'Diseño y desarrollo de:',
            list: ['Aplicaciones para iOS', 'Aplicaciones para Android', 'Aplicaciones Híbridas']
          },
          {
            icon: 'fas fa-chart-line',
            title: 'Marketing Digital',
            text: 'Creación, desarrollo y ejecución de Estrategias de Marketing Digital utilizando:',
            list: ['Inbound Marketing', 'Posicionamiento Web SEO/SEM', 'Campañas publicitarias', 'Social Media', 'Estrategia de contenidos']
          },
          {
            icon: 'fas fa-briefcase',
            title: 'Imagen Corporativa',
            text: 'Desarrollamos la identidad de tu compañía a través de la creación de:',
            list: ['Manual de Marca', 'Manual de Identidad Corporativa', 'Branding Corporativo']
          },
          {
            icon: 'fas fa-chalkboard',
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
        ],

        map: {
          center: { lat: 19.426495, lng: -99.170212 },
          map_options: {
            disableDefaultUI: true,
            styles: [{
              featureType: 'all',
              stylers: [{
                saturation: -80
              }]
            }, {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{
                hue: '#00ffee'
              }, {
                saturation: 50
              }]
            }, {
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [{
                visibility: 'off'
              }]
            }]
          },
          infoWindowPos: { lat: 19.426495, lng: -99.170212 },
          infoWinOpen: true,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          },
          markers: [
            {
              position: { lat: 19.426495, lng: -99.170212 }
            }
          ]
        }
      }
    },

    mounted() {
      this.$store.commit('rename', 'Home')
    },

    // BEGIN METHODS
    methods: {
      submit_contact: function() {
        if (!this.$refs.form.validate()) {
          this.$dialog.notify.warning('Asegurate de llenar todos los campos requeridos', {
            position: 'top-right',
            timeout: 5000
          })
          return
        }

        fbq('track', 'contact')
        ga('send', 'event', 'Contact', 'sent')

        this.$axios.post(
          process.env.SERVER_URL + '/api/contact', {
            name: this.contact.name,
            email: this.contact.email,
            company: this.contact.company,
            message: this.contact.message
          }
        ).then((res) => {
          this.dialog = false
          // alert('Tu mensaje fúe enviado exitosamente. Nos pondremos en contacto contigo muy pronto.')
          this.$dialog.notify.success('Tu mensaje fúe enviado exitosamente. Nos pondremos en contacto contigo muy pronto.', {
            position: 'top-right',
            timeout: 5000
          })

        })
          .catch(e => {
            console.error(e)
            // alert('¡Oops! Sucedió un error registrando tu mensaje. Por favor contáctanos directamente o intenta de nuevo mas tarde.')
            this.$dialog.notify.error('¡Oops! Sucedió un error registrando tu mensaje. Por favor contáctanos directamente o intenta de nuevo mas tarde.', {
              position: 'top-right',
              timeout: 5000
            })
            this.dialog = false;
          })
      }
    }
    //  END METHODS


  }
</script>

<style lang="scss">

  .v-overlay--active::before {
    opacity: 1;
  }

  .v-overlay::before {
    background-color: #ffffff;
  }

  .theme--light.v-messages {
    color: #0db7cd;
  }

  .v-dialog {
    box-shadow: none;

    @media(max-width: 900px) {
      margin: 0;
    }
  }

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

  #projects {
    background: #ffff;
  }


  #services {
    .v-card--hover {
      transition: background-color 1s ease, color 1s ease;

      &:hover {
        background: #0db7cd;

        .v-card__text {
          color: white;
        }

        .theme--light.v-icon {
          color: white;
        }
      }

      .theme--light.v-icon {
        color: #0db7cd;
      }
    }
  }

</style>
