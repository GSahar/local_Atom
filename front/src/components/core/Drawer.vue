<template >
 <v-navigation-drawer
        app
        v-model="getDrawerState"
        theme="light"
      >
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-account"
            title="Личный кабинет"
            value="personal"
            :to="{name: 'Personal'}"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-list-box"
            title="Заявки"
            value="requests"
          ></v-list-item>
          <v-list-group >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                prepend-icon="mdi-cog"
                title="Администрирование"
                value="admin"
              ></v-list-item>
            </template>
            <v-list-item
              title="Пользователи"
              value="users"
              :to="{name: 'users'}"
            ></v-list-item>
            <v-list-item
              title="Роли"
              value="roles"
              :to="{name: 'roles'}"
            ></v-list-item>
            <v-list-item
              title="Информационные системы"
              value="incoming-requests"
              :to="{name: 'tasks'}"
            ></v-list-item>
          </v-list-group>
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
