<template>
  <v-card
    class="h-100 px-1"
    max-height="100%"
  >
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
      ></v-text-field>
    </div>
    <v-btn
      class="mr-3 mt-4"
      color="success"
      @click="$emit('onAdd')"
    >
      Добавить
    </v-btn>
  </div>

  <v-data-table
    :headers="headers"
    :items="filteredRoles"
    hide-actions
    item-key="id"
  >
  <template v-slot:item="{ item }">
      <tr
        style="cursor: pointer;"
      >
        <td
          v-if="type == 'taskRoles'">
          {{ item.task }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td style="width: 50px;">
          <v-icon
          size="small"
          color="error"
          @click="removeRole(item.id, $event)"
        >
          mdi-delete
        </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
  </v-card>
</template>
<script>
import store from '@/store';

export default {
  name: 'EditingUserRoles',
  props: [
    'roles',
    'type'
  ],
  emits: [
    'onRemove',
    'onAdd'
  ],
  data: () => ({
    searchValue: '',
    filteredItems: []
  }),
  methods: {
    removeRole(itemId, $event){
      this.$emit('onRemove',itemId);
    }
  },
  computed:{
    headers: function(){
      return this.type && this.type == 'taskRoles' ?
      [
        {
          title: 'Информационная система',
          align: 'start',
          sortable: true,
          key: 'task',
        },
        {
          title: 'Наименование роли',
          align: 'start',
          sortable: true,
          key: 'name',
        },

      ]
        :
      [
        {
          title: 'Наименование роли',
          align: 'start',
          sortable: true,
          key: 'name',
        }
      ]
    },
    filteredRoles: function(){
      let mappedRoles = [];
      if(this.type != 'taskRoles')
        mappedRoles = this.roles.map(role => role);
      else
        mappedRoles = this.roles.map(
          role => {
            return {
              ...role,
              task: store.getters.getTask(role.task_id).name
            };
          }
        );

      return mappedRoles
          .filter(role => (role.name && role.name.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) > -1) ||
                          (role.task && role.task.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) > -1)
            )
    }
  },
}
</script>
<style lang="">

</style>
