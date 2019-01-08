<template>
  <v-container>
    <v-layout justify-center>
      <h1 class="headline"> Blog de Phoenix </h1>

    </v-layout>


    <no-ssr>
      <masonry
        :cols="{default: 4, 1500: 3, 700: 2, 400: 1}"
        :gutter="{default: '30px', 700: '15px'}"
      >
        <div v-for="(post,index) in posts" :key="post.id">
          <transition name="posts" :appear="index>3" >
            <v-card  md4
                     class="my-3" hover>
              <v-card-media
                class="white--text"
                :src="post._embedded['wp:featuredmedia'][0].link"
              >
                <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                    <span class="headline white--text"
                          style="text-shadow:0 0 2px black">{{ post.title.rendered }}</span>
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
          </transition>
        </div>


      </masonry>
    </no-ssr>



    <v-layout justify-center>
      <v-icon v-if="loading_posts">fas fa-spinner fa-spin</v-icon>
    </v-layout>

  </v-container>

</template>

<script>
  import NoSSR from 'vue-no-ssr'

  export default {

    transition: {
      name: 'tweakOpacity',
    },

    head:{
        title: "Blog",
    },

    components: {
      'no-ssr': NoSSR
    },
    name: 'Blog',

    data() {
      return {
        posts:[],
        page: 1,
        loading_posts: false,
      }
    },

    async asyncData({ $axios }) {
      const posts = await $axios.$get('https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=4&page=1')
      return { posts }
    },

    methods: {
     async handleScroll (posts) {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;

          if (bottomOfWindow && !this.loading_posts) {
            this.loading_posts = true;
            let mobile =  window.innerWidth <= 960;
            let next_page = ++ this.page
            if(mobile) next_page += 3
            let per_page = mobile? 1 : 4;

            try{
              let new_posts = await this.$axios.$get(`https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts?_embed&per_page=${per_page}&page=${next_page}`);
              this.posts = this.posts.concat(new_posts);
              this.loading_posts = false;
            } catch(e){
              console.log(e);
              this.loading_posts = false;
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
    },

    mounted(){
      this.$store.commit('rename', 'Blog')
    }



  }
</script>

<style scoped>
   /*TRANSITION STYLES*/

   .posts-enter-active, .posts-leave-active {
     transition: all 1s ease-in-out;
   }
   .posts-enter, .posts-leave-to /* .posts-leave-active below version 2.1.8 */ {
     opacity: 0;
     transform: translateY(30px);
   }

</style>
