<template >
  <div>
    <v-app-bar
      app
      color="primary"
      theme="light"
    >
      <v-app-bar-nav-icon
      @click.stop="toggleDrawerState"></v-app-bar-nav-icon>

      <v-toolbar-title>UI Technology</v-toolbar-title>

      <v-spacer></v-spacer>
    <router-link to="/login">
      <v-btn color="white">
      <v-icon>mdi-export</v-icon>
        Выйти
      </v-btn>
    </router-link>

    </v-app-bar>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
   name: 'CoreToolbar',
   methods:{
    ...mapActions(['toggleDrawerState'])
   }
}
</script>
<style lang="scss">

</style>
