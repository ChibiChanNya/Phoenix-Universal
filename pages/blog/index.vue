<template>
  <v-container>
    <v-layout justify-center>
      <h1 class="headline my-4"> {{ $t('blog.header') }} </h1>
    </v-layout>

    <masonry
      :key=""
      :cols="{default: 4, 2000: 3, 700: 2, 500: 1}"
      :gutter="{default: '30px', 700: '15px'}"
    >
      <template v-for="post in posts">
        <v-card md4
                class="my-3" hover :key="post.id">
          <v-card-media
            class="white--text"
            :src="post._embedded['wp:featuredmedia'][0].source_url"
            :lazy-src="require('@/assets/img/post-placeholder.png')" transition="fade"
          >
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline white--text" style="text-shadow:0 0 2px black">{{ post.title.rendered }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            <span v-html="post.excerpt.rendered"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn icon  class="green--text lighten-1" :href="`whatsapp://send?text=${post.title.rendered} ${server_url}/blog/${post.id}`" :data-text="`whatsapp://send?text=${post.title.rendered} ${server_url}/blog/${post.id}`" data-action="share/whatsapp/share">
              <v-icon medium>fab fa-whatsapp</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text" :href="`https://twitter.com/intent/tweet?text=${post.title.rendered} ${server_url}/blog/${post.id}`" target="_blank">
              <v-icon medium>fab fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4" :href="`https://www.facebook.com/sharer/sharer.php?u=${server_url}/blog/${post.id}`">
              <v-icon medium>fab fa-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat class="blue--text" :to="'/blog/'+post.id">{{ $t('blog.read_more') }}</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </masonry>


    <v-layout justify-center>
      <v-icon v-if="loading_posts">fas fa-spinner fa-spin</v-icon>
    </v-layout>

  </v-container>

</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {

    transition: {
      name: 'tweakOpacity'
    },

    head: {
      title: 'Blog'
    },

    components: {
      'no-ssr': NoSSR
    },
    name: 'Blog',

    data() {
      return {
        posts_load: [],
        posts: [],
        page: 1,
        loading_posts: false,
        server_url: process.env.SERVER_URL,
      }
    },

    async asyncData({ $axios }) {
      const posts_load = await $axios.$get('https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=4&page=1')
      return { posts_load }
    },

    methods: {
      async handleScroll(posts) {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight

        if (bottomOfWindow && !this.loading_posts) {
          this.loading_posts = true
          let mobile = window.innerWidth <= 960
          let next_page = ++this.page
          if (mobile) next_page += 3
          let per_page = mobile ? 1 : 4

          try {
            let new_posts = await this.$axios.$get(`https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=${per_page}&page=${next_page}`)
            new_posts.forEach((post) => {
              this.posts.push(post)
            })
            this.loading_posts = false
          } catch (e) {
            console.log(e)
            this.loading_posts = false
            window.removeEventListener('scroll', this.handleScroll)
          }
        }
      }

    },

    beforeMount() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },

    mounted() {
      this.$store.commit('rename', this.$t('pages.blog'))
      this.posts_load.forEach((post) => {
        if(post._embedded['wp:featuredmedia']){
          this.posts.push(post);
          console.log("GO");
        }

      })
    }


  }
</script>

<style>
  /*TRANSITION STYLES*/

  .posts-enter-active, .posts-leave-active {
    transition: all 1s ease-in-out;
  }

  .posts-enter, .posts-leave-to /* .posts-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(300px);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

</style>
