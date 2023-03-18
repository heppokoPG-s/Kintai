<template>
  <v-container>
    <v-card>
      <v-card-title>
        Vuetifyについて
      </v-card-title>
    </v-card>

    <hello-world />

  </v-container>
</template>

<script>
import HelloWorld from './SubView/HelloWorld.vue'

export default {
  name: 'HomeView',

  components: {
    HelloWorld,
  },

  metaInfo: {
    title: 'Vietifyについて',
  },

  created() {
    // console.log(this.$store.state.drawer);
  }
}
</script>
