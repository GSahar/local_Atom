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
    <v-btn
      color="general"
      class="mt-6 me-2"
      @click="create()"
      prepend-icon="mdi-plus"
    >
      Создать заявку
    </v-btn>

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
    <v-btn
      color="error"
      variant="plain"
    >

      Отменить
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

  <v-dialog width="500" v-model="dialog">

  <template v-slot:default="{ isActive }">
    <v-card >
      <v-card-title primary-title>
        Создание заявки
      </v-card-title>

      <v-form
        class="mx-4"
        @submit.prevent="submit"
        v-model="valid"
      >

        <v-autocomplete
          label="Информационный ресурс"
          variant="underlined"
          name="task"
          v-model="taskReq"
          :items="tasks"
          item-title="name"
          item-value="id"
          :rule="rules.default"
        >

        </v-autocomplete>

        <v-textarea
          name="name"
          label="Коментарий"
          variant="underlined"
          id="id"
        ></v-textarea>



      <v-card-actions>
        <v-btn
          text="Создать"
          color="general"
          type="submit"
        ></v-btn>

        <v-btn
          text="Отмена"
          color="error"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
     </v-form>
    </v-card>
  </template>
</v-dialog>
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
    page:1,
    dialog: false,
    tasks: store.getters.getTasks,
    valid: false,
    taskReq: ''
  }),
  methods: {
    create(){
      this.dialog = true;
    },
    getDefaultRule(){
      return value => {
          if (!value || (value && value.length == 0)) return 'Заполните поле!';
          return true;
        }
    },
    submit(){
      if(this.valid){
        this.dialog = false;
        console.log(this.taskReq);
        //TODO создание заявки
      }
    }
  },
  computed:{
    pageCount: function(){
      return Math.ceil(this.items.length/9)
    },
    items: function(){
      return this.refItems.map(item => {
        let task = store.getters.getTask(item.task_id);
        let manager = store.getters.getUser(item.manager_id);
        return {
          ...item,
          name: task.name,
          type: store.getters.getTaskType(task.type).name,
          manager: manager.lastName + ' ' + manager.firstName.substring(0,1) + '.' + manager.secondName.substring(0,1)
        }
      }).filter(
        item => {
          return item.name.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.type.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.manager.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1 ||
                 item.status.toLocaleUpperCase().indexOf(this.searchValue.toLocaleUpperCase()) != -1
        }
      )
    },
    rules: function(){
      return {
        default: [
          this.getDefaultRule()
        ]
      }
    }
  },
  mounted: function(){
  }
}
</script>
<style lang="">

</style>
