<template>

  <div id="dev">
    <services-template :header="header" :sections="sections"></services-template>

  </div>


</template>

<script>
  import ServicesTemplate from '@/components/ServicesTemplate'

  export default {

    transition: {
      name: 'zoom',
      enterActiveClass: 'animated zoomIn',
      leaveActiveClass: 'animated zoomOut'
    },

    components:
      { 'services-template': ServicesTemplate },

    head() {
      return {
        title: this.$t('pages.mobile_development'),

        meta: [
          {
            hid: 'MetaBasic',
            name: this.$t('services.company_image.header.title'),
            content: this.$t('services.company_image.header.text')
          },
          // SCHEMA
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.company_image.header.text')
          },
          { hid: 'SchemaURL', property: 'og:url', content: process.env.SERVER_URL + this.$route.fullPath },
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.company_image.header.text')
          },
          //  Twitter
          { hid: 'TwitterTitle', name: 'twitter:title', content: this.$t('services.company_image.header.title') },
          { hid: 'TwitterDesc', name: 'twitter:description', content: this.$t('services.company_image.header.text') }
        ]
      }
    },

    name: 'mobile-development',


    data() {
      return {
        header: {
          title: this.$t('services.mobile_development.header.title'),
          banner: require('@/assets/img/services/mobile_development_banner.jpg'),
          banner_mobile: require('@/assets/img/services/mobile_development_banner_mobile.jpg'),
          text: this.$t('services.mobile_development.header.text')
        },
        sections: [
          {
            title: this.$t('services.mobile_development.sections[0].title'),
            text: this.$t('services.mobile_development.sections[0].text'),
            bullets: this.$t('services.mobile_development.sections[0].bullets'),
            color: '',
            image: 'https://www.suportegratuito.com.br/wp-content/uploads/2017/06/original.png'
          },
          {
            title: this.$t('services.mobile_development.sections[1].title'),
            text: this.$t('services.mobile_development.sections[1].text'),
            bullets: this.$t('services.mobile_development.sections[1].bullets'),
            color: 'white',
            image: 'https://desafiolatam.com/assets/ui-dd9c63426b948676e0094ec323330e2d9e815ca64f048da29c2af13cc5df53b2.png'
          },
          {
            title: this.$t('services.mobile_development.sections[2].title'),
            text: this.$t('services.mobile_development.sections[2].text'),
            bullets: this.$t('services.mobile_development.sections[2].bullets'),
            color: 'blue lighten-3',
            image: 'http://www.iconarchive.com/download/i75813/martz90/circle/camera.ico'
          }
        ]
      }
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.mobile_development'))
    },

    methods: {}

  }


</script>

<style lang="scss">


</style>
