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
      title: 'Marketing Digital'
    },

    name: 'online-marketing',

    data() {
      return {
        header:{
          title: this.$t('services.online_marketing.header.title'),
          banner: require('@/assets/img/services/consulting_banner.jpg'),
          banner_mobile: require('@/assets/img/services/consulting_banner_mobile.jpg'),
          text: this.$t('services.online_marketing.header.text'),
        },
        sections: [
          {
            title: this.$t('services.online_marketing.sections[0].title'),
            text: this.$t('services.online_marketing.sections[0].text'),
            bullets: this.$t('services.online_marketing.sections[0].bullets'),
            color:"",
            image: "https://image.flaticon.com/icons/png/512/65/65381.png",
          },
          {
            title:this.$t('services.online_marketing.sections[1].title'),
            text: this.$t('services.online_marketing.sections[1].text'),
            bullets: this.$t('services.online_marketing.sections[1].bullets'),
            color:"white",
            image: "https://image.flaticon.com/icons/svg/34/34200.svg",
          },
          {
            title:this.$t('services.online_marketing.sections[2].title'),
            text: this.$t('services.online_marketing.sections[2].text'),
            bullets: this.$t('services.online_marketing.sections[2].bullets'),
            color:"blue lighten-3",
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
