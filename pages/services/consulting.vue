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
        title: this.$t('pages.consulting'),

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

    name: 'consulting',


    data() {
      return {
        header: {
          title: this.$t('services.online_marketing.header.title'),
          banner: require('@/assets/img/services/consulting_banner.jpg'),
          banner_mobile: require('@/assets/img/services/consulting_banner_mobile.jpg'),
          text: this.$t('services.online_marketing.header.text')
        },
        sections: [
          {
            title: this.$t('services.online_marketing.sections[0].title'),
            text: this.$t('services.online_marketing.sections[0].text'),
            bullets: this.$t('services.online_marketing.sections[0].bullets'),
            color: '',
            image: 'https://image.flaticon.com/icons/png/512/65/65381.png'
          },
          {
            title: this.$t('services.online_marketing.sections[1].title'),
            text: this.$t('services.online_marketing.sections[1].text'),
            bullets: this.$t('services.online_marketing.sections[1].bullets'),
            color: 'white',
            image: 'https://image.flaticon.com/icons/svg/34/34200.svg'
          },
          {
            title: this.$t('services.online_marketing.sections[2].title'),
            text: this.$t('services.online_marketing.sections[2].text'),
            bullets: this.$t('services.online_marketing.sections[2].bullets'),
            color: 'blue lighten-3',
            image: 'https://www.shareicon.net/download/2015/12/11/685818_global.svg'
          }
        ]
      }
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.online_marketing'))
    },

    methods: {}

  }


</script>

<style lang="scss">


</style>
