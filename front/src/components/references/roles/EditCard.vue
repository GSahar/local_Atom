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
        ></v-text-field>
      </div>
      <v-card-actions class="mb-5">
        <div class="d-flex flex-row justify-space-between w-100">
          <v-btn
            color="success"
          >
            Сохранить
          </v-btn>
          <v-btn
            class="me-5 mb-3"
            color="error"
          >
            Отмена
          </v-btn>
        </div>
      </v-card-actions>
    </div>

  </v-card>
</template>
<script>
import store from '@/store';

export default {
  name: 'EditingRoleTaskCard',
  props: ['id'],
  data: () => ({
    role: {
      id: 0,
      name: ''
    }
  }),
  mounted: function(){
    this.role = store.getters.getTaskRole(this.id)
  }
}
</script>
<style lang="">

</style>
