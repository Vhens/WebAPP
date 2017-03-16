<template>
  <div id='app'>
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>

import header from 'components/header/Header.vue';
import tab from 'components/tab/Tab.vue';
export default {
  components:{
    'v-header':header,
    'v-tab':tab
  }
}
</script>

<style scoped lang="scss">

</style>
