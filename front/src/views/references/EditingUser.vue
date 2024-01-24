<template>
  <div class="d-flex flex-direction-row">
    <v-btn
      :to="{name: 'users'}"
      class="mb-3"
    >
      Назад
    </v-btn>
    <h2 class="ms-3">Редактирование пользователя</h2>
  </div>
  <v-tabs
      v-model="tab"
      color="primary"
      align-tabs="start"
    >
      <v-tab :value="1">Общее</v-tab>
      <v-tab :value="2">Роли</v-tab>
      <v-tab :value="3">Информационные системы</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        :key="1"
        :value="1"
      >
        <editing-user-common
          :user="user"
          :edited="edited"
          @change="onChange()"
          @save="onSave()"
          @cancel="onCancel()"
        >
        </editing-user-common>
      </v-window-item>
      <v-window-item
        :key="2"
        :value="2"
      >
        <editing-user-roles
          :roles="user.roles"
        >
        </editing-user-roles>
      </v-window-item>
      <v-window-item
        :key="3"
        :value="3"
      >
      <editing-user-roles
        :roles="user.task_roles"
        :type="'tasks'"
      >
      </editing-user-roles>
      </v-window-item>
    </v-window>
</template>
<script>
import common from '@/services/common.js';
import store from '@/store';
import EditingUserCommon from '@/components/references/users/Common.vue'
import EditingUserRoles from '@/components/references/users/Roles.vue'

export default {
  name: 'EditingUser',
  props: ['id'],
  components: {
    'editing-user-common': EditingUserCommon,
    'editing-user-roles':  EditingUserRoles
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
    }
  },
  data: () => ({
    tab: null,
    refUser: {},
    user: {},
    edited: false
  }),
  mounted: function(){
    Object.assign(this.refUser,store.getters.getUsers.find(user => user.id == this.id));
    Object.assign(this.user,this.refUser);
  }
}
</script>
<style lang="scss">

</style>
