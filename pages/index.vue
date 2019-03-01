<template>
  <div id="home">
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
            <vue-typer class="mb-2" :text="[ $t('home.create'), $t('home.transform'), $t('home.evolve')]" :repeat="1" :pre-type-delay="500"
                       :type-delay=150></vue-typer>
          </no-ssr>

          <div class="subheading mb-3 text-xs-center">{{ $t('home.digital_agency') }}</div>

          <v-btn
            class="phoenix mt-5"
            large
            light
            color="#d83b00"
            href="#"
          >
            {{ $t('home.know_us')}}
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
            <h1 class="headline mb-3">{{$t('home.services_title')}}</h1>
            <v-flex md6 xs10 class="ma-auto">
              <span class="subheading text-xs-justify">
                {{$t('home.services_text')}}
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
              v-for="(card, index) in $t('home.cards')"
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
          <div class="headline white--text mb-3 text-xs-center" v-vpshow="'rollIn'">{{$t('home.promo_title')}}
          </div>
          <em v-vpshow="'rollIn'">{{$t('home.promo_text')}}</em>

          <v-btn v-vpshow="'rollIn'"
                 class="phoenix-blue mt-5"
                 dark
                 large
                 color="#0db7cd"
                 href="#"
          >
            {{$t('home.promo_btn')}}
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
            <h1 class="headline">{{ $t('home.projects_title') }}</h1>
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
            v-for="(project, i) in $t('home.projects')"
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
              v-for="(project, i) in $t('home.projects')"
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
                <v-img :src="project_imgs[i]"></v-img>
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
            v-for="(project, i) in $t('home.projects')"
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
              <h1 class="headline">{{ $t('home.contact_title') }}</h1>
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
                {{ $t('home.contact_text') }}
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
                    <v-dialog v-model="show_contact_dialog" persistent dark fullscreen content-class="contact-overlay" transition="fade">
                      <v-btn slot="activator" round large="" dark color="#d83b00" class="pa-4 mx-auto">
                        <v-icon class="mr-3">message</v-icon>
                        {{ $t('home.modal_btn') }}
                      </v-btn>
                      <v-container>
                        <v-layout justify-center>
                          <v-card max-width="800px" elevation="0" light>
                            <v-card-title class="pb-0">
                            <span
                              class="headline text-xs-center">
                              {{ $t('home.modal_headline') }}
                            </span>
                            </v-card-title>
                            <v-card-text class="pb-0">
                              <v-container grid-list-md class="pb-0">
                                <v-form v-model="contact.valid" ref="form">
                                  <v-layout wrap>
                                    <v-flex xs12>
                                      <v-text-field outline light :label="$t('home.modal_name')" v-model="contact.name"
                                                    :hint="$t('home.modal_name')" color="#0db7cd" required
                                                    :rules="contact.rules.name"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                      <v-text-field outline light :label="$t('home.modal_company')" v-model="contact.company"
                                                    :hint="$t('home.modal_company_hint')" color="#0db7cd"
                                                    required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                      <v-text-field outline="" light :label="$t('home.modal_email')" required v-model="contact.email"
                                                    :hint="$t('home.modal_email_hint')" color="#0db7cd"
                                                    :rules="contact.rules.email">
                                      </v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                      <v-textarea outline light :label="$t('home.modal_message')" color="#0db7cd" v-model="contact.message"
                                                  required :rules="contact.rules.message"></v-textarea>
                                    </v-flex>
                                  </v-layout>
                                </v-form>

                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <small class="red--text">{{ $t('home.modal_asterisk') }}</small>
                              <v-spacer></v-spacer>
                              <v-btn color="#0db7cd" dark round @click="submit_contact">{{ $t('home.modal_submit') }}</v-btn>
                              <v-btn color="#0db7cd" dark round @click="show_contact_dialog = false">{{ $t('home.modal_cancel') }}</v-btn>

                            </v-card-actions>
                          </v-card>
                        </v-layout>

                      </v-container>



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
        show_contact_dialog: false,
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

        project_imgs:[
          require('@/assets/img/projects/FH.jpg'),
          require('@/assets/img/projects/PROMTEL.jpg'),
          require('@/assets/img/projects/AFER.jpg'),
          require('@/assets/img/projects/QUINIELA.jpg'),
          require('@/assets/img/projects/GREENPIT.jpg')
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
      this.$store.commit('rename', this.$t('pages.home'))
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
          this.show_contact_dialog = false
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
            this.show_contact_dialog = false;
          })
      }
    }
    //  END METHODS

  }
</script>

<style lang="scss">

  .contact-overlay{
    background-color: white;
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

  #projects{
    /*background: url("~assets/img/tech_bg.png");*/
  }

</style>
