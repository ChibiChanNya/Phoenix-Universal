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
            Nuestros equipos de desarrollo están formados por integrantes expertos en diseño, experiencia de usuario,
            programación y administración de proyectos.
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
        <v-layout row align-center justify-space-around wrap>
          <v-flex md6>
            <h2 class="headline mb-2">Diseño Responsivo</h2>
            <p>
              Más del 50 por ciento de los usuarios de la web realizan búsquedas desde sus teléfonos. Si su sitio web
              carece de un diseño responsivo, no se mostrará bien en los teléfonos y perderá ventas y clientes
              potenciales, por cada usuario que tenga que pellizcar y hacer zoom. Con nuestros servicios de diseño web
              responsivo, obten un diseño pulido para que pueda maximizar las conversiones.
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Vista profesional para cada resolución
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Exponte a una mayor audiencia
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Mejora posicionamiento en motores de búsqueda
                </v-layout>
              </li>
            </ul>
          </v-flex>
          <v-flex md5>
            <v-img src="https://image.flaticon.com/icons/png/512/65/65381.png" contain
                   height="250px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="seo" class="white">
      <v-container md8>
        <v-layout row align-center justify-space-around reverse>
          <v-flex md6>
            <h2 class="headline mb-2">SEO (Search Engine Optimization)</h2>
            <p>
              SEO (Search Engine Optimization) es la tecnología que integramos a nuestro código y diseño para crear
              páginas web de alto impacto en buscadores como Google. La integración de SEO en tu página web es
              fundamental para poder aparecer en los primeros lugares de búsqueda.
              La mayor parte de los usuarios solo revisan los primeros 3 resultados asi que es fundamental encontrarse
              en ellos para tus palabras clave.

            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Análisis de palabras clave
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Optimización de velocidad de carga
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Contenido enriquecido para motores de búsqueda
                </v-layout>
              </li>
            </ul>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md5>
            <v-img src="https://image.flaticon.com/icons/svg/34/34200.svg" contain
                   height="250px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="e-commerce" class="blue lighten-2">
      <v-container md8>
        <v-layout row align-center justify-space-around>
          <v-flex md6>
            <h2 class="headline mb-2">E-Commerce</h2>
            <p>
              Conéctate a tu audiencia con un robusto sistema de e-commerce para transformar tu negocio. Hacemos las ventas en línea fàciles al incorporar pagos, inventario y procesamiento de pedidos en un solo lugar.
              Tus clientes disfrutarán de una experiencia de compra ideal y te va a encantar lo fácil que es administrar tu negocio en un sólo lugar.
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Diseño de tienda personalizado
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Manejo inventario y formas de pago
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Automatizar pedidos y envíos
                </v-layout>
              </li>
            </ul>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md5>
            <v-img src="https://www.shareicon.net/download/2015/12/11/685818_global.svg" contain
                   height="250px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="killer-apps" class="teal lighten-4">
      <v-container md8>
        <v-layout row align-center justify-space-around reverse>
          <v-flex md6>
            <h2 class="headline mb-2">Plataformas Innovadoras</h2>
            <p>
              ¿Tienes una idea en mente que hará que seas el próximo Mark Zuckerberg? Nosotros te ayudamos a materializarla y convertirla en realidad. Ponemos cualquier proyecto que puedas imaginar al alcance de tus manos.
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Consultoría en modelo de negocios
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Seguridad y mantenimiento de tu información
                </v-layout>
              </li>
              <li>
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  Integración con otras plataformas o apps
                </v-layout>
              </li>
            </ul>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md5>
            <v-img src="https://image.flaticon.com/icons/png/512/69/69045.png" contain
                   height="250px"></v-img>
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

    methods: {}

  }


</script>

<style lang="scss">


</style>
