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
        title: this.$t('pages.motion_graphics'),

        meta: [
          {
            hid: 'MetaBasic',
            name: 'description',
            content: this.$t('services.motion_graphics.header.text')
          },
          // SCHEMA
          { hid: 'SchemaTitle', property: 'og:title', content: this.$t('services.motion_graphics.header.title') },

          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.motion_graphics.header.text')
          },
          { hid: 'SchemaURL', property: 'og:url', content: process.env.SERVER_URL + this.$route.fullPath },
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.$t('services.motion_graphics.header.text')
          },
          //  Twitter
          { hid: 'TwitterTitle', name: 'twitter:title', content: this.$t('services.motion_graphics.header.title') },
          { hid: 'TwitterDesc', name: 'twitter:description', content: this.$t('services.motion_graphics.header.text') }
        ]
      }
    },

    name: 'motion-graphics',

    data() {
      return {
        header:{
          title: this.$t('services.motion_graphics.header.title'),
          banner: require('@/assets/img/services/motion_graphics_banner.jpg'),
          banner_mobile: require('@/assets/img/services/motion_graphics_banner_mobile.jpg'),
          text: this.$t('services.motion_graphics.header.text'),
          video_url: "https://www.youtube.com/embed/E6DHf1pa3bA"
        },
        sections: [
          {
            title: this.$t('services.motion_graphics.sections[0].title'),
            text: this.$t('services.motion_graphics.sections[0].text'),
            bullets: this.$t('services.motion_graphics.sections[0].bullets'),
            color:"grey lighten-4",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
          },
          {
            title:this.$t('services.motion_graphics.sections[1].title'),
            text: this.$t('services.motion_graphics.sections[1].text'),
            bullets: this.$t('services.motion_graphics.sections[1].bullets'),
            color:"grey lighten-3",
            image: "https://image.flaticon.com/icons/svg/34/34200.svg",
          },
          {
            title:this.$t('services.motion_graphics.sections[2].title'),
            text: this.$t('services.motion_graphics.sections[2].text'),
            bullets: this.$t('services.motion_graphics.sections[2].bullets'),
            color:"grey lighten-2",
            image: "https://www.shareicon.net/download/2015/12/11/685818_global.svg",
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
