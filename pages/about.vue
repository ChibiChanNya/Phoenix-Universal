<template>

  <div id="about">
    <section id="about-hero" class="phoenix-orange">
      <v-container>

        <v-flex md8 xs11 class="mx-auto">
          <h1 class="headline my-3 white--text">{{$t('about.header')}}</h1>

          <no-ssr>
            <p>
              <vue-typer id="typewriter" :text="$t('about.p1')" :pre-type-delay='300' @typed-char="onTypedChar"
                         :type-delay='5' :repeat='0'></vue-typer>
            </p>
          </no-ssr>
        </v-flex>

      </v-container>
    </section>

    <section id="about-parallax">
      <v-parallax :src="require('@/assets/img/plane.jpg')" height="250">
        <v-flex md10 class="mx-auto">
          <v-layout >
            <v-flex class="py-4 font-weight-bold" style="text-shadow: 1px 1px 1px rgba(0,0,0,0.5)"> <!--style="color:rgba(0,0,0,0.87)"> -->
              <p>{{$t('about.p2')}}</p>
              <p>{{$t('about.p3')}}</p>
            </v-flex>

          </v-layout>
        </v-flex>
      </v-parallax>
    </section>


    <section id="about-text">
      <v-container>
        <v-flex md11 class="mx-auto">
          <v-layout class="text-xs-center" row wrap>
            <v-flex xs12 md5 >
              <h1 class="headline my-3" >Misión</h1>
              <h3 class="font-italic">"Crear desde cero, transformar tu negocio y evolucionar al ritmo de las nuevas tecnologías."</h3>

              <h1 class="headline mt-5 mb-3" >Visión</h1>
              <h3 class="font-italic mb-3">"Convertir a nuestros clientes en aliados a través del impacto positivo de nuestros servicios en su negocio."</h3>
            </v-flex>

            <v-flex md5 offset-md2 xs12 >
              <v-img class="mx-auto" contain :src="require('@/assets/img/logo-dark-v.png')" alt="Phoenix Development Logo"  height="250px"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>


      </v-container>
    </section>


    <section class="phoenix-blue py-3" style="border-bottom: 1px solid rgba(0,0,0,0.2);">
      <h1 class="headline text-xs-center my-3" >Nuestros Valores</h1>
      <v-container
        grid-list-xl
      >
        <v-layout row wrap>
          <v-flex md3 xs12>
            <v-card class=" pa-2" height="100%" v-vpshow="'fadeInRight'" color="cyan darken-2" elevation="2">
              <v-card-title primary-title class="layout">
                <span class=" mx-auto headline white--text">Felicidad</span>
              </v-card-title>
              <v-card-text>
                <p class="margin-b-5 white--text">Amamos lo que hacemos. Nos encanta apoyarte a transformar tu negocio.</p>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 xs12>
            <v-card class=" pa-2" height="100%" v-vpshow="'fadeInUp'" color="purple" elevation="2">
              <v-card-title primary-title class="layout">
                <span class="headline mx-auto white--text">Innovación</span>
              </v-card-title>
              <v-card-text>
                <p class="margin-b-5 white--text">Aprendemos todos los días para transformar el conocimiento en soluciones que aporten valor a tu negocio.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 xs12>
            <v-card class=" pa-2" height="100%" v-vpshow="'fadeInUp'" color="blue-grey darken-2" elevation="2">
              <v-card-title primary-title class="layout">
                <span class="headline mx-auto white--text">Impacto</span>
              </v-card-title>
              <v-card-text>
                <p class="margin-b-5 white--text">Nos enfocamos en resolver los problemas más importantes de tu negocio con soluciones de alto impacto.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 xs12>
            <v-card class=" pa-2" height="100%" v-vpshow="'fadeInLeft'" color="red darken--2" elevation="2">
              <v-card-title primary-title class="layout">
                <span class="headline mx-auto white--text">Instruir</span>
              </v-card-title>
              <v-card-text>
                <p class="margin-b-5 white--text ">Disfrutamos enseñarte cómo funciona el mundo tecnológico.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </section>
  </div>




</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {

    transition: {
      name: 'flip',
      enterActiveClass: 'animated flipInX',
      leaveActiveClass: 'animated flipOutX'
    },

    components: {
      'no-ssr': NoSSR
    },

    head: {
      title: 'Quienes Somos'
    },

    name: 'about',

    data() {
      return {
        countWord: 0
      }
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.about_us'))
    },

    methods: {
      onTypedChar: function(typedChar, typedCharIndex) {
        if (typedCharIndex === 0) {
          document.getElementById('typewriter').firstChild.innerHTML = ''
        }
        var lessNodes = document.getElementById('typewriter').lastChild.childNodes
        if (typedChar === ' ' || lessNodes.length === 1) {

          var finalNodes = document.getElementById('typewriter').firstChild
          var listNodes = finalNodes.childNodes

          var newNode = document.createElement('span')

          var x = this.countWord
          var countNodes = listNodes.length
          while (x < countNodes) {
            if (listNodes[this.countWord].innerHTML !== ' ')
              newNode.insertAdjacentElement('beforeend', listNodes[this.countWord])
            else
              this.countWord++

            // TODO: ADD LAST CHAR
            x++
          }
          newNode.className = 'nowrap'
          finalNodes.insertAdjacentElement('beforeend', newNode)

          this.countWord++
        }
      }
    }


  }


</script>

<style lang="scss">

  #about {
    .vue-typer {
      font-family: 'Roboto', sans-serif;
      font-size: 2.25rem;
      text-align: center;

      @media(min-width:768px){
        font-size: 3.3rem;
      }

      .char.custom.typed {
        /*color: rgba(0, 0, 0, 0.87);*/
        text-shadow: none;
        color: white;
      }

      .custom.caret {
        background-color: white;
      }
    }

    span.nowrap {
      white-space: nowrap;
    }

    .left{
      float:none !important;;
    }



    #about-hero{
      min-height:420px;

      .headline.white--text{
        opacity:0.7;
      }

      #typewriter{
        line-height:1;
      }
    }

    #about-parallax{
      p{
        font-size: 1rem;

        @media(min-width:768px){
          font-size: 1.2rem;
        }
      }

    }

  }


</style>
