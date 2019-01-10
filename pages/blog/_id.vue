<template>
  <v-container>
    <h1>{{post.title.rendered}}</h1>

    <div>
      <div v-html="post.content.rendered"></div>
    </div>
  </v-container>

</template>

<script>

  import axios from 'axios'

  export default {

    transition: {
      name: 'bounce',
      enterActiveClass: 'animated bounceInDown',
      leaveActiveClass: 'animated bounceOutUp'
    },

    data(){
      return{

      }
    },

    validate ({ params }) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },

    async asyncData ({ params, error }) {
      let url = `https://wp.phoenixdevelopment.mx/wp-json/wp/v2/posts/${params.id}?_embed`;
      let { data } = await axios.get(url);
      return { post: data }
    },


    head() {
      return{
        title: this.post.title.rendered
      }
    },

    name: 'blog-article',

    mounted() {
      this.$store.commit('rename', this.post.title.rendered)
    }
  }


</script>

<style scoped>


</style>
