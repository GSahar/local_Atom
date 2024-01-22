<template>
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

  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    item-key="id"
  >
  <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        color="primary"
        @click="console.log('edit ' + item.name)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
        @click="console.log('delete ' + item.name)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
 const tasks = [
    {
      name: '1C Бухгалтерия'
    },
    {
      name: 'Личный кабинет'
    }
  ]

export default {
  data: () => ({
      itemsPerPage: 5,
      headers: [
        {
          title: 'Название задачи',
          align: 'start',
          sortable: true,
          key: 'name',
        },
        { title: '', align: 'end', key: 'actions', sortable: false }
      ],
      serverItems: [],
      loading: false,
      totalItems: 0,
      items: tasks,
      total:5,
      searchValue: ''
    }),
  methods: {
    search(){
        this.items = tasks?.filter(task =>  (task.name.toUpperCase().indexOf(this.searchValue.toUpperCase()??'') > -1))??[];
    }
  }
}
</script>
<style lang="">

</style>
