<template>
  <v-app dark>
    <core-toolbar />
    <core-drawer />

    <v-main >
      <div class="main-container">
        <router-view/>
      </div>

    </v-main>

  </v-app>

</template>

<script >
  import CoreDrawer from '@/components/core/Drawer.vue'
  import CoreToolbar from '@/components/core/Toolbar.vue'
  export default{
    components: {
      CoreDrawer,
      CoreToolbar
    }

  }
</script>

<style lang="scss">
//@import "@/styles/index.scss";
.main-container{
  margin: .5rem;
  padding: 0.5rem;
  height: calc(100vh - 82px);
  -webkit-box-shadow: 0px 0px 25px 4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 25px 4px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 25px 4px rgba(34, 60, 80, 0.2);
}

</style>
