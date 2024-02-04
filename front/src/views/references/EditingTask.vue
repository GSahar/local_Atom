<template>
  <v-layout class="d-flex flex-column h-100">
    <header class="d-flex">
      <v-btn
          :to="{name: 'tasks'}"
          class="mb-3"
        >
          Назад
        </v-btn>
      <h2 class="ms-3">Редактирование ИС</h2>
    </header>
    <section class="d-flex flex-direction-row justify-space-between">
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
      </section>
    <section class="mt-3 px-1 py-1 d-flex flex-row overflow-auto h-100">
      <editing-role-tasks
        :task_roles="roles"
        @addTaskRole="addTaskRole"
        @deleteTaskRole="deleteTaskRole"
        @setSelected="setSelected"
        class="w-100"
      ></editing-role-tasks>

      <editing-role-tasks-card
        class="ms-2"
        :width="isExpanded ? '50%' : '0'"
        v-if="selected!=0"
        :id="selected"
        @roleUpdated="onRoleUpdated()"
      ></editing-role-tasks-card>
    </section>
  </v-layout>


</template>
<script>
import common from '@/services/common';
import store from '@/store';
import  EditingRoleTasks from '@/components/references/roles/TaskRoles.vue'
import  EditingRoleTasksCard from '@/components/references/roles/EditCard.vue'

export default {
  name: 'EditingTask',
  props: ['id'],
  data: () => ({
    refTask: {},
    task: {},
    edited: false,
    roles: [],
    selected: 0,
    isExpanded: false
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
    },
    onCancel(){
      Object.assign(this.task,this.refTask);
      this.edited = false;
    },
    addTaskRole(){
      store.dispatch('addTaskRole',{task_id: this.id});
      this.roles = store.getters.getTaskRoles(this.task.id);
    },
    deleteTaskRole(id){
      this.selected = 0;
      this.isExpanded = false;
      store.dispatch('removeTaskRole',id);
      this.roles = store.getters.getTaskRoles(this.task.id);
    },
    setSelected(id){
      this.isExpanded = true;
      this.selected = id;
    },
    onRoleUpdated(){
      this.roles = store.getters.getTaskRoles(this.task.id);
    }
  },
  components: {
    'editing-role-tasks': EditingRoleTasks,
    'editing-role-tasks-card': EditingRoleTasksCard
  }
}
</script>
<style lang="scss">
editing-role-tasks-card{
  transition: 1s;
}
</style>
