<template>
  <div class="d-flex">
    <v-btn
        :to="{name: 'tasks'}"
        class="mb-3"
      >
        Назад
      </v-btn>
    <h2 class="ms-3">Редактирование ИС</h2>
  </div>
  <div class="d-flex flex-direction-row justify-space-between">
    <div class="w-25">
      <v-text-field
        name="name"
        label="Наименование"
        variant="underlined"
        v-model="task.name"
        @update:modelValue="onChange()"
      ></v-text-field>
    </div>
    <div class="mr-3 mt-5">
      <v-btn
        color="success"
        class="mr-2"
        :disabled="!edited"
        @click="onSave()"
      >
        Сохранить
      </v-btn>
      <v-btn
        color="error"
        :disabled="!edited"
        @click="onCancel()"
      >
        Отмена
      </v-btn>
    </div>
  </div>
  <div class="mt-3">
    <editing-role-tasks
      :task_roles="roles"
    ></editing-role-tasks>
  </div>

</template>
<script>
import common from '@/services/common';
import store from '@/store';
import  EditingRoleTasks from '@/components/references/roles/TaskRoles.vue'

export default {
  name: 'EditingTask',
  props: ['id'],
  data: () => ({
    refTask: {},
    task: {},
    edited: false,
    roles: []
  }),
  mounted: function(){
    Object.assign(this.refTask,store.getters.getTasks.find(task => task.id == this.id));
    Object.assign(this.task,this.refTask);
    this.roles = store.getters.getTaskRoles(this.task.id);
  },
  methods: {
    onChange(){
      this.edited = !common.compareObjects(this.refTask,this.task);
    },
    onSave(){
      Object.assign(this.refTask,this.task);
      this.edited = false;
      store.dispatch({
        type: 'setTask',
        editedTask: this.task
      });
    }
  },
  components: {
    'editing-role-tasks': EditingRoleTasks
  }
}
</script>
<style lang="">

</style>
