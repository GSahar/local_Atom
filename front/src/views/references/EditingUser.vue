<template>
  <div class="d-flex flex-direction-row">
    <v-btn
      :to="{name: 'users'}"
      class="mb-3"
    >
      Назад
    </v-btn>
    <h2 class="ms-3">{{!isExist ? 'Создание пользователя' : 'Редактирование пользователя'}}</h2>
  </div>
  <v-tabs
      v-model="tab"
      color="primary"
      align-tabs="start"
      @update:modelValue="isExpanded = false"
    >
      <v-tab :value="1">Общее</v-tab>
      <v-tab v-if="isExist" :value="2">Роли</v-tab>
      <v-tab v-if="isExist" :value="3">Информационные системы</v-tab>
    </v-tabs>
    <v-window
      v-model="tab"
      style="height: 90%;"
    >
      <v-window-item
        :key="1"
        :value="1"
        class="h-100"
      >
        <editing-user-common
          :user="user"
          :edited="edited"
          :exist="isExist"
          @change="onChange()"
          @save="isExist ? onSave() : onAdd()"
          @cancel="onCancel()"
          class="mx-1 my-2"
        >
        </editing-user-common>
      </v-window-item>
      <v-window-item
        :key="2"
        :value="2"
        class="h-100"
      >
        <section
          class="mt-3 w-100 py-1 px-1 d-flex flex-row h-100"

        >
          <editing-user-roles
            :roles="user.roles"
            class="w-100"
            @onRemove="removeRole"
            @onAdd="isExpanded=true"
          >
          </editing-user-roles>
          <editing-user-choice-card
            class="ms-2 "
            :width="isExpanded ? '50%' : '0'"
            @onSave="addRole"
            @onCancel="isExpanded = false"
          >
          </editing-user-choice-card>
        </section>
      </v-window-item>
      <v-window-item
        :key="3"
        :value="3"
        class="h-100"
      >
      <section
          class="mt-3 w-100 py-1 px-1 d-flex flex-row h-100"

      >
        <editing-user-roles
          :roles="user.task_roles"
          class="w-100"
          :type="'taskRoles'"
          @onRemove="removeTaskRole"
          @onAdd="isExpanded=true"
        >
        </editing-user-roles>
        <editing-user-choice-card
          class="ms-2 "
          :width="isExpanded ? '50%' : '0'"
          :type="'taskRoles'"
          @onSave="addTaskRole"
          @onCancel="isExpanded = false"
        >
        </editing-user-choice-card>
      </section>
      </v-window-item>
    </v-window>
</template>
<script>
import common from '@/services/common.js';
import store from '@/store';
import EditingUserCommon from '@/components/references/users/Common.vue';
import EditingUserRoles from '@/components/references/users/Roles.vue';
import EditingUserChoiceCard from '@/components/references/users/ChoiceCard.vue';
import router from '@/router';

export default {
  name: 'EditingUser',
  props: ['id'],
  components: {
    'editing-user-common': EditingUserCommon,
    'editing-user-roles':  EditingUserRoles,
    'editing-user-choice-card':  EditingUserChoiceCard,
  },
  methods: {
    onChange(){
      if(common.compareObjects(this.user,this.refUser)) this.edited = false;
      else this.edited = true;
    },
    onSave(){
      Object.assign(this.refUser,this.user);
      this.edited = false;
      store.dispatch({
        type: 'setUser',
        editedUser: this.user
      });
    },
    onCancel(){
      Object.assign(this.user,this.refUser);
      this.edited = false;
    },
    onAdd(){
      Object.assign(this.refUser,this.user);
      this.edited = false;
      store.dispatch('addNewUser',this.user);
      //TODO ищем id по другому
      let id = store.getters.getUsers[store.getters.getUsers.length-1].id;
      router.push({name: 'editingUser', params: {id: id}})
    },
    addRole(roleId){
      store.dispatch('addRoleToUser', {roleId: roleId, userId: this.id});
    },
    addTaskRole(taskRoleId){
      store.dispatch('addTaskRoleToUser', {taskRoleId: taskRoleId, userId: this.id});
    },
    removeRole(roleId){
      store.dispatch('removeRoleFromUser', {roleId: roleId, userId: this.id});
      setTimeout(() => this.getData());
    },
    removeTaskRole(taskRoleId){
      store.dispatch('removeTaskRoleFromUser', {taskRoleId: taskRoleId, userId: this.id});
      setTimeout(() => this.getData());
    },
    getData(){
      Object.assign(this.refUser,store.getters.getUsers.find(user => user.id == this.id));
      Object.assign(this.user,this.refUser);
    }
  },
  data: () => ({
    tab: null,
    refUser: {},
    user: {},
    edited: false,
    isExpanded: false
  }),
  mounted: function(){
    this.getData();
  },
  computed:{
    isExist: function(){
      return !!this.id;
    }
  }
}
</script>
<style lang="scss">
  .v-window__container{
    height: 97% !important;
  }
</style>
