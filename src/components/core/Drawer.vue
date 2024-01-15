<template >
 <v-navigation-drawer
        app
        v-model="getDrawerState"
        theme="light"
      >
        <v-list nav>

          <v-list-group value="requests">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-list-box"
                title="Заявки"
                value="requests"
              ></v-list-item>
            </template>
            <v-list-item
              title="Мои заявки"
              value="my-requests"
              to="/idm/my-requests"
            ></v-list-item>
            <v-list-item
              title="Входящие заявки"
              value="incoming-requests"
            ></v-list-item>
          </v-list-group>


          <v-list-item prepend-icon="mdi-folder-account" title="Справочники" value="reference"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Администрирование" value="administration"></v-list-item>
          <v-list-item prepend-icon="mdi-eye-circle" title="Аудит" value="audit"></v-list-item>
          <v-list-item prepend-icon="mdi-chart-box" title="Отчеты" value="reports"></v-list-item>

        </v-list>
      </v-navigation-drawer>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
   name: 'CoreDrawer',
   computed: {
    ...mapGetters(['getDrawerState']),

   },
   methods: {
   }
}
</script>
<style lang="scss">


</style>
