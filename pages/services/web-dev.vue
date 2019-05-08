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
      title: 'Desarrollo Web'
    },

    name: 'web-development',

    data() {
      return {
        header:{
          title: this.$t('services.web_development.header.title'),
          banner: require('@/assets/img/services/web_dev_banner.jpeg'),
          banner_mobile: require('@/assets/img/services/web_dev_banner_mobile.jpg'),
          text: this.$t('services.web_development.header.text'),
        },
        sections: [
          {
            title: this.$t('services.web_development.sections[0].title'),
            text: this.$t('services.web_development.sections[0].text'),
            bullets: this.$t('services.web_development.sections[0].bullets'),
            color:"",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
          },
          {
            title:this.$t('services.web_development.sections[1].title'),
            text: this.$t('services.web_development.sections[1].text'),
            bullets: this.$t('services.web_development.sections[1].bullets'),
            color:"white",
            image: "https://image.flaticon.com/icons/svg/34/34200.svg",
          },
          {
            title:this.$t('services.web_development.sections[2].title'),
            text: this.$t('services.web_development.sections[2].text'),
            bullets: this.$t('services.web_development.sections[2].bullets'),
            color:"blue lighten-3",
            image: "https://www.shareicon.net/download/2015/12/11/685818_global.svg",
          },
          {
            title:this.$t('services.web_development.sections[3].title'),
            text: this.$t('services.web_development.sections[3].text'),
            bullets: this.$t('services.web_development.sections[3].bullets'),
            color:"teal lighten-4",
            image: "https://image.flaticon.com/icons/png/512/69/69045.png",
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
