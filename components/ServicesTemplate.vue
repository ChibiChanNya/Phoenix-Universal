<template>

  <div id="dev">
    <section id="services-hero" class="phoenix-orange">
      <v-img
        :srcset="srcset" max-height="450px"
        sizes="(max-width: 400px) 375px, 1900px" :src="header.banner_mobile"
        class="banner">

        <v-container>
          <v-layout
            align-center
            column
            justify-center
            class="phoenix-text"
            style="text-shadow: 1px 1px 1px black"
            my-3
          >
            <h1 class="large-headline text-xs-center">{{header.title}}</h1>

            <div class="subheading my-3 text-xs-center white--text text-bubble">
              {{header.text}}
            </div>
            <!-- FIXED BOTTOM RIGHT DIALOG BUTTON + POPUP -->
            <contact-form>
              <v-btn
                slot="popup"
                class="phoenix-blue mt-5 "
                dark
                large
                color="#0db7cd"
                href="#"
              >
                {{$t('services.btn_text')}}
              </v-btn>
            </contact-form>
            <!-- END FIXED DIALOG BUTTON-->

          </v-layout>
        </v-container>

      </v-img>
    </section>


    <section v-for="(section, index) in sections" class="services-section"
             :class="section.color" v-vpshow="'bounceInUp'">
      <v-container xs12 md8>
        <v-layout row align-center justify-space-around :class="{reverse: index%2 === 0}" wrap>
          <v-flex md6>
            <h2 class="headline mb-2">{{section.title}}</h2>
            <p>
              {{section.text}}
            </p>
            <ul style="list-style: none" class="flex align-center">
              <li v-for="bullet in section.bullets">
                <v-layout align-center>
                  <v-icon class="mr-1">check_circle</v-icon>
                  {{bullet}}
                </v-layout>
              </li>
            </ul>
          </v-flex>
          <v-flex xs12 md5 class="py-4">
            <v-img :src="section.image" contain
                   height="250px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>


</template>

<script>

  import Contact from '@/components/Contact.vue'

  export default {

    props: ['header', 'sections'],

    components: {
      'contact-form': Contact
    },

    computed:{
      srcset: function(){
        return `${this.header.banner_mobile} 400w, ${this.header.banner} 1920w`;
      }
    }

  }


</script>

<style lang="scss">

  .banner .v-image__image {
    filter: saturate(50%);
  }
  .text-bubble{
    border-radius: 16px;
    background-color: rgba(13,183,205,0.6);
    padding: 16px;

    @media(min-width:400px){
      max-width: 80%;
    }
  }

</style>
