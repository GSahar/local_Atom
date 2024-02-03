<template >
  <v-card
    height="100%"
    width="150px"
  >
    <div class="d-flex flex-column justify-space-between ms-5 mt-5 h-100">
      <div>
        <v-text-field
          name="name"
          label="Наименование роли"
          variant="underlined"
          v-model="role.name"
          style="width: 95%;"
          @update:modelValue="() => {onChange();}"
        ></v-text-field>
      </div>
      <v-card-actions class="mb-5">
        <div class="d-flex flex-row justify-space-between w-100">
          <v-btn
            color="success"
            @click="onSave()"
            variant="plain"
          >
            Сохранить
          </v-btn>
          <v-btn
            class="me-5 mb-3"
            color="error"
            @click="onCancel()"
            variant="plain"
          >
            Отмена
          </v-btn>
        </div>
      </v-card-actions>
    </div>

  </v-card>
</template>
<script>
import common from '@/services/common';
import store from '@/store';

export default {
  name: 'EditingRoleTaskCard',
  emits: ['roleUpdated'],
  props: ['id'],
  data: () => ({
    refRole: {
      id: '',
      name: ''
    },
    editedRole: {
      id: '',
      name: ''
    },
    edited: false
  }),
  mounted: function(){

  },
  computed:{
    role: function(){
      let result = {};
      Object.assign(result,store.getters.getTaskRole(this.id))
      return result;
    }
  },
  methods: {
    onSave(){
      Object.assign(this.refRole,this.role);
      store.dispatch('setTaskRole',this.role);
      this.$emit('roleUpdated');
    },
    onCancel(){
      Object.assign(this.role,this.refRole)
    },
    onChange(){
      this.edited = !common.compareObjects(this.refRole,this.role);
    }
  }
}
</script>
<style lang="">

</style>
