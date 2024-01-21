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
        <v-card >
          <v-container>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <div class="w-75">
                  <v-text-field
                    name="lastName"
                    label="Фамилия"
                    variant="underlined"
                    v-model="user.lastName"
                    @update:modelValue="onChange()"
                  ></v-text-field>
                  <v-text-field
                    name="firstName"
                    label="Имя"
                    variant="underlined"
                    v-model="user.firstName"
                    @update:modelValue="onChange()"
                  ></v-text-field>
                  <v-text-field
                    name="secpndName"
                    label="Отчество"
                    variant="underlined"
                    v-model="user.secondName"
                    @update:modelValue="onChange()"
                  ></v-text-field>
                  <v-text-field
                    name="place"
                    label="Место работы"
                    variant="underlined"
                    v-model="user.place"
                    @update:modelValue="onChange()"
                  ></v-text-field>
                  <v-text-field
                    name="job"
                    label="Должность"
                    variant="underlined"
                    v-model="user.job"
                    @update:modelValue="onChange()"
                  ></v-text-field>
                </div>
              </v-col>

              <v-col cols=2>
                <div class="d-flex justify-center">
                  <img height="250px" src="@\assets\person-placeholder.jpg" alt="">
                </div>
                <div class="d-flex flex-column w-100 mt-5 justify-center">
                  <v-btn
                    :disabled="!edited"
                    color="success"
                    class="mb-2"
                    @click="onSave()"
                  >
                    Сохранить
                  </v-btn>
                  <v-btn
                    :disabled="!edited"
                    color="error"
                    @click="onCancel()"
                  >
                    Отмена
                  </v-btn>
                </div>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <div class="w-75">

                </div>
              </v-col>

              <v-col cols=2 >

              </v-col>
              <v-spacer></v-spacer>
            </v-row>

          </v-container>
        </v-card>
      </v-window-item>
      <v-window-item
        :key="2"
        :value="2"
      >
        Вторая вкладка
      </v-window-item>
      <v-window-item
        :key="3"
        :value="3"
      >
        Третья вкладка
      </v-window-item>
    </v-window>
</template>
<script>
import common from '@/services/common.js';
import store from '@/store';

export default {
  name: 'EditingUser',
  props: ['id'],
  methods: {
    onChange(){
      if(common.compareObjects(this.user,this.refUser)) this.edited = false;
      else this.edited = true;
    },
    onSave(){
      this.refUser = common.copyObject(this.user);
      this.edited = false;
      store.dispatch({
        type: 'setUser',
        editedUser: this.user
      });
    },
    onCancel(){
      this.user = common.copyObject(this.refUser);
      this.edited = false;
    }
  },
  data: () => ({
    tab: null,
    refUser: {
      firstName: '',
      secondName: '',
      lastName: '',
      place: '',
      job: ''
    },
    user: {
      firstName: '',
      secondName: '',
      lastName: '',
      place: '',
      job: ''
    },
    edited: false
  }),
  mounted: async function(){
    await new Promise((resolve) => resolve(common.copyObject(store.getters.getUsers.find(user => user.id == this.id))))
      .then(result => this.refUser = result);
    await new Promise((resolve) => resolve(common.copyObject(this.refUser)))
      .then(result => this.user = result);
  }
}
</script>
<style lang="scss">

</style>
