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
        @input="search"
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
      <v-icon
        size="small"
        class="me-2"
        color="general"
        @click="openTask(item.id)"
      >
        mdi-forward
      </v-icon>
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
  name: 'PersonalTasks',
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
      { title: '', align: 'end', key: 'actions', sortable: false }
    ],
    refItems: store.getters.getUserTasks(1),
    page:1
  }),
  methods: {
    search(){

    },
  },
  computed:{
    pageCount: function(){
      return Math.ceil(this.items.length/9)
    },
    items: function(){
      return this.refItems.filter(item => {
        return item.name.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1
      }).map(item => {
        return {
          ...item,
          type: store.getters.getTaskType(item.type)?.name??'Не указан'
        }
      })
    }
  },
  mounted: function(){
  }
}
</script>
<style lang="">

</style>
