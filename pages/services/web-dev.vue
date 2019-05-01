<template>

  <div id="dev">
    <services-template :header="header" :sections="sections"></services-template>

  </div>


</template>

<script>
  import ServicesTemplate from "@/components/ServicesTemplate"

  export default {

    transition: {
      name: 'flip',
      enterActiveClass: 'animated flipInX',
      leaveActiveClass: 'animated flipOutX'
    },

    components:
      {'services-template': ServicesTemplate},

    head: {
      title: 'Desarrollo Web'
    },

    name: 'web-development',

    data() {
      return {
        header:{
          title: "Diseño y Desarrollo profesional de Páginas y Aplicaciones Web",
          banner: require('@/assets/img/services/web_dev_banner.jpeg'),
          text: "Nuestros equipos de desarrollo están formados por integrantes expertos en diseño, experiencia de usuario, programación y administración de proyectos."
        },
        sections: [
          {
            title:"Diseño Responsivo",
            color:"blue lighten-3",
            text:"Más del 50 por ciento de los usuarios de la web realizan búsquedas desde sus teléfonos. Si su sitio web carece de un diseño responsivo, no se mostrará bien en los teléfonos y perderá ventas y clientes potenciales, por cada usuario que tenga que pellizcar y hacer zoom. Con nuestros servicios de diseño web responsivo, obten un diseño pulido para que pueda maximizar las conversiones.",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
            bullets:[
              "Vista profesional para cada resolución",
              "Exponte a una mayor audiencia",
              "Mejora posicionamiento en motores de búsqueda",
            ],
          },
          {
            title:"Diseño Responsivo",
            color:"white",
            text:"Más del 50 por ciento de los usuarios de la web realizan búsquedas desde sus teléfonos. Si su sitio web carece de un diseño responsivo, no se mostrará bien en los teléfonos y perderá ventas y clientes potenciales, por cada usuario que tenga que pellizcar y hacer zoom. Con nuestros servicios de diseño web responsivo, obten un diseño pulido para que pueda maximizar las conversiones.",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
            bullets:[
              "Vista profesional para cada resolución",
              "Exponte a una mayor audiencia",
              "Mejora posicionamiento en motores de búsqueda",
            ],
          },
          {
            title:"Diseño Responsivo",
            color:"",
            text:"Más del 50 por ciento de los usuarios de la web realizan búsquedas desde sus teléfonos. Si su sitio web carece de un diseño responsivo, no se mostrará bien en los teléfonos y perderá ventas y clientes potenciales, por cada usuario que tenga que pellizcar y hacer zoom. Con nuestros servicios de diseño web responsivo, obten un diseño pulido para que pueda maximizar las conversiones.",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
            bullets:[
              "Vista profesional para cada resolución",
              "Exponte a una mayor audiencia",
              "Mejora posicionamiento en motores de búsqueda",
            ],
          }
        ],
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
