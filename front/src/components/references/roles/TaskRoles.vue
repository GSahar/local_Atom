<template>
  <v-card
  >
  <div class="d-flex flex-row justify-space-between">
    <v-card-title primary-title>
      Роли ИС
    </v-card-title>
    <v-btn
      color="primary"
      class="mt-5 mr-3"
    >
      Добавить
    </v-btn>
  </div>
  <v-data-table
    :headers="headers"
    :items="task_roles"
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
  </v-card>
</template>
<script>
export default {
  name: 'EditingRoleTasks',
  props: ['task_roles'],
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
  }),
  mounted: function(){
  }
}
</script>
<style lang="">

</style>
