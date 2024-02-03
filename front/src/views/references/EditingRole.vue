<template>
  <v-layout class="d-flex flex-column h-100">
    <header class="d-flex">
      <v-btn
          :to="{name: 'roles'}"
          class="mb-3"
        >
          Назад
        </v-btn>
      <h2 class="ms-3">Редактирование роли</h2>
    </header>
    <section class="d-flex flex-direction-row justify-space-between">
      <div class="w-25">
        <v-text-field
          name="name"
          label="Наименование"
          variant="underlined"
          v-model="role.name"
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
    <section
      class="mt-3 mx-1 py-1 px-1 d-flex flex-row"
      style="height: 85%;"
    >
      <editing-role-tasks
        :task_roles="task_roles"
        class="w-100"
        @deleteTaskRole="removeTaskRole"
      ></editing-role-tasks>
      <editing-role-choice-card
        class="ms-2 "
        :width="isExpanded ? '50%' : '0'"
        @onSave="chooseTaskRole"
      ></editing-role-choice-card>
    </section>
  </v-layout>
</template>
<script>
import common from '@/services/common';
import store from '@/store';
import EditingRoleTasks from '@/components/references/roles/TaskRoles.vue';
import EditingRoleChoiceCard from '@/components/references/roles/ChoiceCard.vue';

export default {
  name: 'EditingRole',
  props: ['id'],
  data: () => ({
    refRole: {},
    role: {},
    edited: false,
    isExpanded: true,
    refreshKey: 1
  }),
  mounted: function(){
    Object.assign(this.refRole,store.getters.getRoles.find(role => role.id == this.id));
    Object.assign(this.role,this.refRole);
  },
  methods: {
    onChange(){
      this.edited = !common.compareObjects(this.refRole,this.role);
    },
    onSave(){
      Object.assign(this.refRole,this.role);
      this.edited = false;
      store.dispatch({
        type: 'setRole',
        editedRole: this.role
      });
    },
    chooseTaskRole(taskRoleId){
      store.dispatch('addTaskRoleToRole',{role_id: this.id,task_role_id: taskRoleId});
    },
    removeTaskRole(taskRoleId){
      store.dispatch('removeTaskRoleFromRole',{role_id: this.id,task_role_id: taskRoleId});
      Object.assign(this.refRole,store.getters.getRoles.find(role => role.id == this.id));
      Object.assign(this.role,this.refRole);
    }
  },
  components: {
    'editing-role-tasks': EditingRoleTasks,
    'editing-role-choice-card': EditingRoleChoiceCard
  },
  computed: {
    task_roles: function(){
      return this.role && this.role.task_roles ? this.role.task_roles.map(role => {
        let task = store.getters.getTask(role.task_id);
        this.refreshKey;
        return {
          ...role,
          name: task.name + ' - ' + role.name
        }
      }) : [];
    }
  }
}
</script>
<style lang="scss">
*{
    box-sizing: border-box;
  }
</style>
