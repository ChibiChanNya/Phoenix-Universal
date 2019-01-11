<template>
  <v-container class="pa-4 post">
    <v-img :src="post._embedded['wp:featuredmedia'][0].source_url" max-height="300px" contain></v-img>

    <div class="post-title text-xs-center my-4">
      <h1>{{post.title.rendered}}</h1>
      <div class="small grey--text lighten-1">
            <span class="mx-2">
              Por: {{post._embedded.author[0].name}}
            </span>
        <span class="mx-2">
              |
            </span>
        <span class="mx-2">
              Categoría: {{post._embedded['wp:term'][0][0].name}}
            </span>
        <span class="mx-2">
              |
            </span>
        <span class="mx-2">
              Publicado: {{ post.date | moment('from') }}
            </span>
      </div>

    </div>

    <div class="text-xs-justify ml-4 pl-2 mr-1">
      <div v-html="post.content.rendered"></div>
    </div>

    <!--<social-sharing :url="url"-->
                    <!--:title="this.post.title.rendered"-->
                    <!--:description="this.post.excerpt.rendered"-->
                    <!--:quote="this.post.excerpt.rendered"-->
                    <!--hashtags="phoenixdevelopment"-->
                    <!--network-tag="span"-->
                    <!--inline-template>-->
      <!--<div class="social-networks">-->
        <!--<network v-for="(network,i) in networks" :key="i" :network="network.name">-->
          <!--<v-btn class="white&#45;&#45;text" icon small :color="network.color">-->
            <!--<v-icon>{{network.icon}}</v-icon>-->
          <!--</v-btn>-->
        <!--</network>-->
        <!--<network network="facebook">-->
          <!--<i class="fa fa-facebook"></i> Facebook-->
        <!--</network>-->
      <!--</div>-->
    <!--</social-sharing>-->


    <v-layout row grid-list-xs justify-center>
      <div v-for="(network,i) in networks" :key="i">
        <v-btn class="white--text pa-3" :color="network.color">
          <v-icon class="mr-3">{{network.icon}}</v-icon> Compartir
        </v-btn>
      </div>
    </v-layout>

    <div class="social-btns" style="position:fixed; left:0; top:30%;">
      <v-layout column grid-list-xs justify-center>
          <v-btn v-for="(network,i) in networks" :key="i" class="white--text px-2 py-4 ma-0" :color="network.color">
            <v-icon class="mr-3">{{network.icon}}</v-icon> <span class="social-btn-text">Compartir</span>
          </v-btn>
      </v-layout>
    </div>


  </v-container>

</template>

<script>

  import axios from 'axios'

  export default {

    layout: 'blog',

    transition: {
      name: 'bounce',
      enterActiveClass: 'animated bounceInDown',
      leaveActiveClass: 'animated bounceOutUp'
    },


    data() {
      return {
        url: "",
        networks: [
          {
            name: 'facebook',
            icon: 'fab fa-facebook-f',
            color: 'blue darken-4'
          }, {
            name: 'twitter',
            icon: 'fab fa-twitter',
            color: 'light-blue'
          }, {
            name: 'whatsapp',
            icon: 'fab fa-whatsapp',
            color: 'green'
          }, {
            name: 'instagram',
            icon: 'fab fa-instagram',
            color: 'red lighten-3'
          }, {
            name: 'linkedin',
            icon: 'fab fa-linkedin-in',
            color: 'cyan darken-1'
          }

        ]
      }
    },

    validate({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },

    async asyncData({ params, error }) {
      let url = `https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts/${params.id}?_embed`
      let { data } = await axios.get(url)
      return { post: data }
    },


    head() {
      return {
        title: this.post.title.rendered
      }
    },

    name: 'blog-article',

    async mounted() {
      this.$store.commit('rename', this.post.title.rendered);
      this.url = process.env.SERVER_URL +"/blog/"+this.post.id;
    }

  }


</script>

<style lang="scss">

  .post h1 {
    font-size: 3em;
  }

  @media (max-width: 900px) {
    .post img {
      display: block;
      margin: 30px auto;
      width: 100%;
    }
  }

  .post-title h1 {
    font-size: 40px;
    font-weight: 400;
    line-height: 32px !important;
    letter-spacing: normal !important;
    font-family: 'Roboto', sans-serif !important;
    color: #d83b00;
    margin-bottom: 20px;
  }

  .post-title .small {
    font-weight: 600;
    font-size: 14px;
  }

  .social-btns{

    .v-btn{
      border-radius: 0;
      transition: all .2s ease-in;
      min-width: 0;
      width: 50px;

      .social-btn-text{
        opacity:0;
        transition: opacity .4s ease-out, margin .2s ease-in;
        margin-left:-100px;
      }
      &:hover {
        width: 150px;
        border-radius: 2px;

        .social-btn-text{
          opacity:1;
          display:inline-block;
          margin-left: 0;
        }
      }


    }
    :first-child{
      border-top-right-radius: 2px;
    }
    :last-child{
      border-bottom-right-radius: 2px;
    }
  }


</style>
