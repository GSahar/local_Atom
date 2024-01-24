<template>
  <div class="w-100 mb-3 ms-1 d-flex justify-space-between">
  <div style="width: 350px;">
    <v-text-field
      name="search"
      label="Поиск"
      variant="underlined"
      color="primary"
      width="5px"
      prepend-icon="mdi-magnify"
      v-model="searchValue"
      @input="search"
    ></v-text-field>
  </div>
  <v-btn
    class="mr-3 mt-4"
    color="success"
  >
    Добавить
  </v-btn>
</div>

  <v-data-table
    :headers="headers"
    :items="roles"
    hide-actions
    item-key="id"
  >
  <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        color="primary"
        v-if="type!='tasks'"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        color="error"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'EditingUserRoles',
  props: [
    'roles',
    'type'
  ],
  data: () => ({
    headers: [
      {
        title: 'Наименование роли',
        align: 'start',
        sortable: true,
        key: 'name',
      },
      { title: '', align: 'end', key: 'actions', sortable: false }
    ],
    searchValue: ''
  }),
  methods: {
    search(){

    }
  }
}
</script>
<style lang="">

</style>
