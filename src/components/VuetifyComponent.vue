<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
              :src="require('../assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            />
          </v-col>

          <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
              {{ msg }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { VApp, VMain, VContainer, VRow, VCol, VImg} from 'vuetify/lib'
  import vuetify from '@/plugins/vuetify'
  export default {
    vuetify,
    VApp, VMain, VContainer, VRow, VCol, VImg,
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: 'Welcome to Vuetify'
      },
    },
  }
</script>

<style scoped>
  @import '../../node_modules/vuetify/dist/vuetify.css';
</style>