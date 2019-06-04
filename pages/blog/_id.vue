<template>
  <v-container class="pa-4 post" itemscope itemtype="https://schema.org/BlogPosting">
    <v-img itemprop="sharedContent" :src="post._embedded['wp:featuredmedia'][0].source_url" max-height="300px" contain></v-img>

    <div class="post-title text-xs-center my-4">
      <h1 itemprop="name headline">{{post.title.rendered}}</h1>
      <div class="small grey--text lighten-1">
            <span class="mx-2">
              {{ $t('blog.by' )}}: <span itemprop="author">{{post._embedded.author[0].name}}</span>
            </span>
        <span class="mx-2">
              |
            </span>
        <span class="mx-2">
              {{ $t('blog.category' )}}: <span itemprop="articleSection">{{post._embedded['wp:term'][0][0].name}}</span>
            </span>
        <span class="mx-2">
              |
            </span>
        <span class="mx-2">
              {{ $t('blog.published' )}}: <span itemprop="datePublished">{{ post.date | moment('from') }}</span>
            </span>
      </div>

    </div>

    <div class="text-xs-justify ml-4 pl-2 mr-1">
      <div itemprop="body" v-html="post.content.rendered"></div>
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


    <v-layout row grid-list-xs justify-center wrap>
      <div v-for="(network,i) in networks" :key="i">
        <v-btn class="white--text pa-3"
               :color="network.color"
               :href="`${network.url}${post.title.rendered} ${server_url}/blog/${post.id}`"
               target="_blank"
        >
          <span class="mx-auto">
            <v-icon >{{network.icon}}</v-icon>
            <span class="mr-3 hidden-sm-and-down"></span>
            <span class="hidden-sm-and-down">{{ $t('blog.share' )}}</span>
          </span>
        </v-btn>
      </div>
    </v-layout>

    <div class="social-btns" style="position:fixed; left:0; top:30%;">
      <v-layout column grid-list-xs justify-center>
        <v-btn v-for="(network,i) in networks" :key="i" class="white--text px-2 py-4 ma-0"
               :color="network.color"
               :href="`${network.url}${post.title.rendered} ${server_url}/blog/${post.id}`"
               target="_blank"
        >
          <v-icon class="mr-3">{{network.icon}}</v-icon>
          <span class="social-btn-text">{{ $t('blog.share' )}}</span>
        </v-btn>
      </v-layout>
    </div>


  </v-container>

</template>

<script>

  import axios from 'axios'

  export default {

    name: 'blog-article',

    layout: 'blog',

    transition: {
      name: 'bounce',
      enterActiveClass: 'animated bounceInDown',
      leaveActiveClass: 'animated bounceOutUp'
    },


    data() {
      return {
        server_url: process.env.SERVER_URL,
        networks: [
          {
            name: 'facebook',
            icon: 'fab fa-facebook-f',
            color: 'blue darken-4',
            url: `https://www.facebook.com/sharer/sharer.php?u=`,
          }, {
            name: 'twitter',
            icon: 'fab fa-twitter',
            color: 'light-blue',
            url: 'https://twitter.com/intent/tweet?text='
          }, {
            name: 'whatsapp',
            icon: 'fab fa-whatsapp',
            color: 'green',
            url: 'whatsapp://send?text='
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
        title: this.post.title.rendered,

        meta:[
          {
            hid: 'description',
            name: 'description',
            content: this.post.title.rendered,
          },
          // TWITTER CARD
          { hid: 'TwitterCard', name: 'twitter:card', content: 'summary_large_image' },
          { hid: 'TwitterTitle', name: 'twitter:title', content: this.post.title.rendered },
          { hid: 'TwitterDesc', name: 'twitter:description', content: this.stripHTML(this.post.excerpt.rendered) },
          { hid: 'TwitterImg', name: 'twitter:image:src', content: this.post._embedded['wp:featuredmedia'][0].source_url },
          // OPENGRAPH META TAGS
          { hid: 'SchemaTitle', property: 'og:title', content: this.post.title.rendered },
          { hid: 'SchemaType', property: 'og:type', content: 'article' },
          { hid: 'SchemaAuthor', property: 'article:author', content: this.post._embedded.author[0].name },
          { hid: 'SchemaPublished', property: 'article:published_time ', content: this.post.date },
          { hid: 'SchemaCategory', property: 'article:section ', content: this.post._embedded['wp:term'][0][0].name },
          {
            hid: 'SchemaImage',
            property: 'og:image',
            content: this.post._embedded['wp:featuredmedia'][0].source_url
          },
          { hid: 'SchemaImgWidth', property: 'og:image:width', content: this.post._embedded['wp:featuredmedia'][0].media_details.width },
          { hid: 'SchemaImgHeight', property: 'og:image:height', content: this.post._embedded['wp:featuredmedia'][0].media_details.height },
          { hid: 'SchemaURL', property: 'og:url', content: `https://phoenixdevelopment.mx.mx/blog/${this.post.id}` },
          {
            hid: 'SchemaDescription',
            property: 'og:description',
            content: this.stripHTML(this.post.excerpt.rendered),
          },
        ],
      }
    },


    async mounted() {
      this.$store.commit('rename', this.post.title.rendered)
      this.url = process.env.SERVER_URL + '/blog/' + this.post.id
    },

    methods:{
      stripHTML(html){
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      }
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

  .social-btns {

    .v-btn {
      border-radius: 0;
      transition: all .2s ease-in;
      min-width: 0;
      width: 50px;

      .social-btn-text {
        opacity: 0;
        transition: opacity .4s ease-out, margin .2s ease-in;
        margin-left: -100px;
      }

      &:hover {
        width: 150px;
        border-radius: 2px;

        .social-btn-text {
          opacity: 1;
          display: inline-block;
          margin-left: 0;
        }
      }


    }

    :first-child {
      border-top-right-radius: 2px;
    }

    :last-child {
      border-bottom-right-radius: 2px;
    }
  }


</style>
