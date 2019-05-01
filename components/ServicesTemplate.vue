<template>

  <div id="dev">
    <section id="services-hero" class="phoenix-orange">
      <v-parallax :src="header.banner" height="380">
        <v-layout
          column
          align-center
          justify-center
          class="phoenix-text"
          style="text-shadow: 1px 1px 1px black"
        >
          <h1 class="large-headline">{{header.title}}</h1>

          <div class="subheading my-3 text-xs-center white--text">
            {{header.text}}
          </div>

          <v-btn
            class="phoenix-blue mt-5"
            dark
            large
            color="#0db7cd"
            href="#"
          >
            Solicita una cotización
          </v-btn>

        </v-layout>
      </v-parallax>
    </section>


    <section v-for="(section, index) in sections" class="services-section" :class="section.color">
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
          <v-flex xs12 md5>
            <v-img :src="section.image" contain
                   height="250px"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>


</template>

<script>

  export default {

    props: ['header', 'sections'],

  }


</script>

<style lang="scss">


</style>
