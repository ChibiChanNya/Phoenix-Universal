<template>
  <v-container>
    <v-layout justify-center>
      <h1 class="headline"> Blog de Phoenix </h1>

    </v-layout>

    <no-ssr>
      <div v-masonry transition-duration="2s" stagger="0.3s" item-selector=".item" column-width="30" gutter=".v-card"  class="masonry-container">
        <v-flex md4 v-masonry-tile
          v-for="post in posts"
          :key="post.id"
        class="item">
          <v-card
            class="my-3" hover>
            <v-card-media
              class="white--text"
              :src="post._embedded['wp:featuredmedia'][0].link"
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
              <v-btn icon class="red--text">
                <v-icon medium>fab fa-reddit</v-icon>
              </v-btn>
              <v-btn icon class="light-blue--text">
                <v-icon medium>fab fa-twitter</v-icon>
              </v-btn>
              <v-btn icon class="blue--text text--darken-4">
                <v-icon medium>fab fa-facebook</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn flat class="blue--text" :to="'/blog/post/'+post.id">Leer más</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </div>
    </no-ssr>

    <v-layout justify-center>
      <v-icon v-if="loading">fas fa-spinner fa-spin</v-icon>
    </v-layout>

  </v-container>

</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {

    components: {
      'no-ssr': NoSSR
    },
    name: 'blog',

    data() {
      return {
        posts:[],
        page: 1,
        loading: false,
      }
    },

    async asyncData({ $axios }) {
      const posts = await $axios.$get('https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=3&page=1')
      return { posts }
    },

    methods: {
     async handleScroll (posts) {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            this.loading = true;
            let mobile =  window.innerWidth <= 960;
            let next_page = ++ this.page
            if(mobile) next_page += 2
            let per_page = mobile? 1 : 3;

            try{
              let new_posts = await this.$axios.$get(`https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=${per_page}&page=${next_page}`);
              this.posts = this.posts.concat(new_posts);
            } catch(e){
              console.log(e);
              this.loading = false;
              window.removeEventListener('scroll', this.handleScroll);
            }
          }
      },

    },

    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
    }



  }
</script>

<style scoped>

</style>
