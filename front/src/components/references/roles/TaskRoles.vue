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
  <div style="height: 90%;">
    <v-data-table
      :headers="headers"
      :items="task_roles"
      items-per-page="9"
      :height="'50%'"
      v-model:page="page"
      sticky
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
    <template v-slot:bottom>
            <div class="text-center pt-2">
              <v-pagination
                v-model="page"
                :length="pageCount"
              ></v-pagination>
            </div>
          </template>
    </v-data-table>
  </div>
  </v-card>
</template>
<script >
import store from '@/store';

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
    selected: 0,
    page:1
  }),
  mounted: function(){
    this.getData();
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
    },
    getData(){

    }
  },
  computed:{
    pageCount: function(){
      return this.task_roles ? Math.ceil(this.task_roles.length / 9) : 1;
    }
  }
}
</script>
<style lang="scss">
  .selected-row{
    background-color: rgba(170, 255, 170, 0.5);
  }
</style>
