<template>
  <v-card
    class="h-100"
    max-height="100%"
  >
    <main class="d-flex flex-column justify-space-between h-100">
      <section
        style="height: 75%;"
      >
        <v-card-title>
          Выбор роли
        </v-card-title>
        <section
          class="px-3"
        >
          <v-autocomplete
            variant="underlined"
            name="filter"
            label="Информационная система"
            id="id"
            :items="tasks"
            v-model="filterTask"
          ></v-autocomplete>
          <v-text-field
            variant="underlined"
            name="filter"
            label="Наименование роли"
            id="id"
            v-model="filterName"
          ></v-text-field>
        </section>
        <div
          class="h-75 mt-3"
        >
          <v-data-table
            v-model:page="page"
            :headers="headers"
            :items="items"
            items-per-page="5"
            hide-actions
            item-key="id"
            sticky
            v-model="selected"
            show-select
            select-strategy="single"
            :loading="loading"
          >
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
      </section>
      <section
        class="d-flex flex-row justify-space-between w-100 px-3 my-3"
      >
        <v-btn
          color="success"
          class="me-2"
          variant="plain"
          @click="onSave()"
        >
          Добавить
        </v-btn>
        <v-btn
          color="error"
          variant="plain"
          @click="$emit('onCancel')"
        >
          Отмена
        </v-btn>
      </section>
    </main>
    </v-card>
</template>
<script>
import store from '@/store';

export default {
  name: 'EditingRoleChoiceCard',
  emits:['onSave','onCancel'],
  data: () => ({
    headers: [
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

    ],
    page: 1,
    filterTask: '',
    filterName: '',
    selected: null,
    loading: false
  }),
  computed: {
    items: function(){
      return this.getFilteredData(this.refItems);
    },
    refItems: function(){
      return this.getItems();
    },
    pageCount: function(){
      return this.items ? Math.ceil(this.items.length / 5) : 1;
    },
    tasks: function(){
      return this.getTasks();
    }
  },
  methods: {
    getFilteredData(data){
      return data
              .filter(item => (this.filterTask && item.task.toLocaleUpperCase().indexOf(this.filterTask.toLocaleUpperCase()) != -1) || !this.filterTask)
              .filter(item => (this.filterName && item.name.toLocaleUpperCase().indexOf(this.filterName.toLocaleUpperCase()) != -1) || !this.filterName);
    },
    getItems(){
      return store.getters.getTasks
              .map(item => this.getTaskRoles(item))
              .flat();
    },
    getTaskRoles(task){
      return store.getters.getTaskRoles(task.id).map(role => {
        return {
          id: role.id,
          task: task.name,
          name: role.name
        }
      })
    },
    onSave(){
      if(this.selected)
        this.$emit('onSave',this.selected[0])
    },
    getTasks(){
      return this.items ? Array.from(new Set(this.items.map(item => item.task))) : []
    }
  },
  mounted: () => {

  }

}
</script>
<style lang="scss">

</style>
