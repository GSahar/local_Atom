<template>
  <v-card height="100%">
    <div class="d-flex flex-row justify-space-between">
    <v-card-title primary-title>
      Роли ИС
    </v-card-title>
    <v-btn
      color="primary"
      class="mt-5 mr-3"
      @click="$emit('addTaskRole')"
    >
      Добавить
    </v-btn>
  </div>
  <div>
    <v-data-table
    :headers="headers"
    :items="task_roles"
    hide-actions
    item-key="id"
    style="height: 100%"
  >
  <template v-slot:item="{ item }">
    <tr
      :class="selected == item.id ? 'selected-row' : ''"
      @click="setSelected(item.id)"
      style="cursor: pointer;"
    >
      <td>
        {{ item.name }}
      </td>
      <td style="width: 50px;">
        <v-icon
        size="small"
        color="error"
        @click="deleteTaskRole(item.id, $event)"
      >
        mdi-delete
      </v-icon>
      </td>
    </tr>

  </template>

  </v-data-table>
  </div>
  </v-card>
</template>
<script >
export default {
  name: 'EditingRoleTasks',
  props: ['task_roles'],
  emits: ['setSelected','deleteTaskRole','addTaskRole'],
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
    selected: 0
  }),
  mounted: function(){
  },
  methods: {
    setSelected(id){
      this.selected = id;
      this.$emit('setSelected',id);
    },
    deleteTaskRole(id, $event){
      $event.stopPropagation();
      this.selected = 0;
      this.$emit('deleteTaskRole',id);
    }
  }
}
</script>
<style lang="scss">
  .selected-row{
    background-color: rgba(170, 255, 170, 0.5);
  }
</style>
