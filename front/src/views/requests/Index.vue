<template >
  <div
    class="d-flex
           flex-row
           justify-space-between
           w-100
           px-2"
  >
    <div class="w-25 mb-3 ms-1">
      <v-text-field
        name="search"
        label="Поиск"
        variant="underlined"
        color="primary"
        class="w-10"
        prepend-icon="mdi-magnify"
        v-model="searchValue"
      ></v-text-field>
    </div>
    <v-spacer></v-spacer>
  </div>
  <section>
    <v-data-table
      :headers="headers"
      :items="items"
      items-per-page="9"
      hide-actions
      item-key="id"
    >
      <template v-slot:item.actions="{ item }">
        <div
          class="d-flex flex-row"
          v-if="item.status == 'На согласовании'"
        >
          <v-btn
            color="success"
            variant="plain"
          >
            Согласовать
          </v-btn>
          <v-btn
            color="error"
            variant="plain"
          >
            Отменить
          </v-btn>
        </div>
        <v-btn
          v-if="item.status == 'Согласовано'"
          color="general"
          variant="plain"
        >
          Выполнить
        </v-btn>
        </template>
        <template v-slot:bottom>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
            ></v-pagination>
          </div>
        </template>
    </v-data-table>
  </section>
</template>
<script>
import store from '@/store/index';

export default {
  name: 'PersonalRequests',
  data: () => ({
    searchValue: '',
    headers: [
      {
        title: 'Наименование информационного ресурса',
        align: 'start',
        sortable: true,
        key: 'name',
      },
      {
        title: 'Тип',
        align: 'start',
        sortable: true,
        key: 'type',
      },
      {
        title: 'Пользователь',
        align: 'start',
        sortable: true,
        key: 'user',
      },
      {
        title: 'Согласующий',
        align: 'start',
        sortable: true,
        key: 'manager',
      },
      {
        title: 'Состояние',
        align: 'start',
        sortable: true,
        key: 'status',
      },
      {
        title: 'Комментарий',
        align: 'start',
        sortable: true,
        key: 'comment',
      },
      { title: '', align: 'end', key: 'actions', sortable: false }
    ],
    refItems: store.getters.getRequestsByUser(2),
    page:1
  }),
  methods: {

  },
  computed:{
    pageCount: function(){
      return Math.ceil(this.items.length/9)
    },
    items: function(){
      return this.refItems.map(item => {
        let task = store.getters.getTask(item.task_id);
        let manager = store.getters.getUser(item.manager_id);
        let user = store.getters.getUser(item.user_id);
        return {
          ...item,
          name: task.name,
          type: store.getters.getTaskType(task.type).name,
          user: user.lastName + ' ' + user.firstName.substring(0,1) + '.' + user.secondName.substring(0,1),
          manager: manager.lastName + ' ' + manager.firstName.substring(0,1) + '.' + manager.secondName.substring(0,1)
        }
      }).filter(
        item => {
          return item.name.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.type.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.manager.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.status.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.user.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1
        })
    }
  },
  mounted: function(){
  }
}
</script>
<style lang="">

</style>
