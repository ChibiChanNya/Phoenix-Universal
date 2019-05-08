<template>

  <div id="dev">
    <services-template :header="header" :sections="sections"></services-template>

  </div>


</template>

<script>
  import ServicesTemplate from "@/components/ServicesTemplate"

  export default {

    transition: {
      name: 'zoom',
      enterActiveClass: 'animated zoomIn',
      leaveActiveClass: 'animated zoomOut'
    },

    components:
      {'services-template': ServicesTemplate},

    head: {
      title: 'Imagen Corporativa'
    },

    name: 'company-image',

    data() {
      return {
        header:{
          title: this.$t('services.company_image.header.title'),
          banner: require('@/assets/img/services/company_image_banner.jpg'),
          banner_mobile: require('@/assets/img/services/company_image_banner_mobile.jpg'),
          text: this.$t('services.company_image.header.text'),
        },
        sections: [
          {
            title: this.$t('services.company_image.sections[0].title'),
            text: this.$t('services.company_image.sections[0].text'),
            bullets: this.$t('services.company_image.sections[0].bullets'),
            color:"",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
          },
        ],
      }
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.company_image'))
    },

    methods: {}

  }


</script>

<style lang="scss">


</style>
