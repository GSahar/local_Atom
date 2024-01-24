<template>
  <div class="d-flex">
    <v-btn
        :to="{name: 'roles'}"
        class="mb-3"
      >
        Назад
      </v-btn>
    <h2 class="ms-3">Редактирование роли</h2>
  </div>
  <div class="d-flex flex-direction-row justify-space-between">
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
  </div>
  <div class="mt-3">
    <editing-role-tasks
      :task_roles="role.task_roles"
    ></editing-role-tasks>
  </div>

</template>
<script>
import common from '@/services/common';
import store from '@/store';
import  EditingRoleTasks from '@/components/references/roles/TaskRoles.vue'

export default {
  name: 'EditingRole',
  props: ['id'],
  data: () => ({
    refRole: {},
    role: {},
    edited: false
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
    }
  },
  components: {
    'editing-role-tasks': EditingRoleTasks
  }
}
</script>
<style lang="">

</style>
