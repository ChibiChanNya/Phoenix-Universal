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

    head() {
      return {
        title: this.$t('pages.online_marketing'),

        meta: [
          {
            hid: 'MetaBasic',
            name: 'description',
            content: this.$t('services.online_marketing.header.text')
          },
          // SCHEMA
          { hid: 'SchemaTitle', property: 'og:title', content: this.$t('services.online_marketing.header.title') },
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.online_marketing.header.text')
          },
          { hid: 'SchemaURL', property: 'og:url', content: process.env.SERVER_URL + this.$route.fullPath },
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.online_marketing.header.text')
          },
          //  Twitter
          { hid: 'TwitterTitle', name: 'twitter:title', content: this.$t('services.online_marketing.header.title') },
          { hid: 'TwitterDesc', name: 'twitter:description', content: this.$t('services.online_marketing.header.text') }
        ]
      }
    },

    name: 'online-marketing',


    data() {
      return {
        header:{
          title: this.$t('services.online_marketing.header.title'),
          banner: require('@/assets/img/services/marketing_banner.jpg'),
          banner_mobile: require('@/assets/img/services/marketing_banner_mobile.jpg'),
          text: this.$t('services.online_marketing.header.text'),
        },
        sections: [
          {
            title: this.$t('services.online_marketing.sections[0].title'),
            text: this.$t('services.online_marketing.sections[0].text'),
            bullets: this.$t('services.online_marketing.sections[0].bullets'),
            color: 'grey lighten-4',
            image: require('@/assets/img/services/marketing_inbound.png'),
          },
          {
            title:this.$t('services.online_marketing.sections[1].title'),
            text: this.$t('services.online_marketing.sections[1].text'),
            bullets: this.$t('services.online_marketing.sections[1].bullets'),
            color: 'grey lighten-3',
            image: require('@/assets/img/services/marketing_content.png'),
          },
          {
            title:this.$t('services.online_marketing.sections[2].title'),
            text: this.$t('services.online_marketing.sections[2].text'),
            bullets: this.$t('services.online_marketing.sections[2].bullets'),
            color: 'grey lighten-2',
            image: require('@/assets/img/services/marketing_socialmedia2.png'),
          },
        ],
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
