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
        title: this.$t('pages.company_image'),
        meta: [
          {
            hid: 'MetaBasic',
            name: 'description',
            content: this.$t('services.company_image.header.text')
          },
          // SCHEMA
          { hid: 'SchemaTitle', property: 'og:title', content: this.$t('services.company_image.header.title') },
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
      };
    },


    name: 'company-image',

    data() {
      return {
        header: {
          title: this.$t('services.company_image.header.title'),
          banner: require('@/assets/img/services/company_image_banner.jpg'),
          banner_mobile: require('@/assets/img/services/company_image_banner_mobile.jpg'),
          text: this.$t('services.company_image.header.text')
        },
        sections: [
          {
            title: this.$t('services.company_image.sections[0].title'),
            text: this.$t('services.company_image.sections[0].text'),
            bullets: this.$t('services.company_image.sections[0].bullets'),
            color: 'grey lighten-4',
            image: require('@/assets/img/services/image_branding.png'),
          }
        ]
      }
    }
    ,

    mounted() {
      this.$store.commit('rename', this.$t('pages.company_image'))
    }
    ,

    methods: {}

  }


</script>

<style lang="scss">


</style>
