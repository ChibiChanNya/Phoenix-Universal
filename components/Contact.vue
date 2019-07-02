<template>

  <v-dialog v-model="show_contact_dialog" persistent dark fullscreen content-class="contact-overlay" transition="fade">
    <slot name="popup" slot="activator">

    </slot>

    <v-container>
      <v-layout justify-center>
        <v-card max-width="800px" elevation="0" light>
          <v-card-title class="pb-0">
                            <span
                              class="headline text-xs-center">
                              {{ $t('contact_form.modal_headline') }}
                            </span>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-container grid-list-md class="pb-0">
              <v-form v-model="contact.valid" ref="form" >
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field outline light :label="$t('contact_form.modal_name')" v-model="contact.name"
                                  :hint="$t('contact_form.modal_name')" color="#0db7cd" required
                                  :rules="contact.rules.name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field outline light :label="$t('contact_form.modal_company')" v-model="contact.company"
                                  :hint="$t('contact_form.modal_company_hint')" color="#0db7cd"
                                  required></v-text-field>
                  </v-flex>
                  <v-flex xs12 md6>
                    <v-text-field outline="" light :label="$t('contact_form.modal_email')" required v-model="contact.email"
                                  :hint="$t('contact_form.modal_email_hint')" color="#0db7cd"
                                  :rules="contact.rules.email">
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea outline light :label="$t('contact_form.modal_message')" color="#0db7cd"
                                v-model="contact.message"
                                required :rules="contact.rules.message"></v-textarea>
                  </v-flex>
                </v-layout>
              </v-form>

            </v-container>
          </v-card-text>
          <v-card-actions>
            <small class="red--text">{{ $t('contact_form.modal_asterisk') }}</small>
            <v-spacer></v-spacer>
            <v-btn color="#0db7cd" dark round @click="submit_contact">{{ $t('contact_form.modal_submit') }}</v-btn>
            <v-btn color="#0db7cd" dark round @click="show_contact_dialog = false">{{ $t('contact_form.modal_cancel') }}</v-btn>

          </v-card-actions>
        </v-card>
      </v-layout>

    </v-container>
  </v-dialog>


</template>

<script>

  export default {

    data() {
      return {
        show_contact_dialog: false,
        contact: {
          name: '',
          company: '',
          email: '',
          message: '',
          valid: false,

          rules: {
            name: [
              v => !!v || this.$t('contact_form.name_required')
            ],
            email: [
              v => !!v || this.$t('contact_form.email_required'),
              v => /.+@.+\..+/.test(v) || this.$t('contact_form.email_invalid')
            ],
            message: [
              v => !!v || this.$t('contact_form.message_required')
            ]
          }
        }

      }
    },

    mounted(){
    },

    // BEGIN METHODS
    methods: {
      submit_contact: function() {
        if (!this.$refs.form.validate()) {
          this.$dialog.notify.warning(this.$t('contact_form.form_incomplete'), {
            position: 'top-right',
            timeout: 50000
          })
          return
        }
        fbq('track', 'contact')
        ga('send', 'event', 'Contact', 'sent')

        this.$axios.post(
          process.env.SERVER_URL + '/api/contact', {
            name: this.contact.name,
            email: this.contact.email,
            company: this.contact.company,
            message: this.contact.message
          }
        ).then((res) => {
          this.show_contact_dialog = false
          // alert('Tu mensaje fúe enviado exitosamente. Nos pondremos en contacto contigo muy pronto.')
          this.$dialog.notify.success(this.$t('contact_form.form_success'),
            {
              position: 'top-right',
              timeout: 5000
            })
        })
          .catch(e => {
            console.error(e)
            // alert('¡Oops! Sucedió un error registrando tu mensaje. Por favor contáctanos directamente o intenta de nuevo mas tarde.')
            this.$dialog.notify.error(this.$t('contact_form.form_failure'),
              {
                position: 'top-right',
                timeout: 5000
              })
            this.show_contact_dialog = false
          })
      }
    }
    //  END METHODS

  }


</script>

<style lang="scss">

  .contact-overlay {
    background-color: white;
  }

  .theme--light.v-messages {
    color: #0db7cd;
  }

  .error--text.v-input--is-dirty:not(.v-input--is-focused) {
    .v-messages__message {
      color: red;
    }

    .v-input__slot {
      border-color: red !important;
    }

    .v-dialog {
      box-shadow: none;

      @media(max-width: 900px) {
        margin: 0;
      }
    }
  }

  .v-alert > div{
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }

</style>
