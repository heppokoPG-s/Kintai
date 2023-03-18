<template>
  <v-container>
    <v-card>
      <v-card-title>
        Vueについて
      </v-card-title>
    </v-card>

    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </v-container>
</template>

<script>
import HelloWorld from './SubView/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  metaInfo: {
    title: 'Vueに関して',
  },
}
</script>

<style>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>