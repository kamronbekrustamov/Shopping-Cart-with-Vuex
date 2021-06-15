<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    TheHeader
  },
  computed: {
    ...mapGetters(['products', 'isLoggedIn', 'cart'])
  },
  methods: {
    ...mapMutations([]),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>