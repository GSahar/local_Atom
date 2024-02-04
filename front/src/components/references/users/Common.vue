<template>
  <v-card
    class="h-100"
  >
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <div class="w-75">
            <v-text-field
              name="lastName"
              label="Фамилия"
              variant="underlined"
              color="primary"
              v-model="user.lastName"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="firstName"
              label="Имя"
              variant="underlined"
              color="primary"
              v-model="user.firstName"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="secpndName"
              label="Отчество"
              variant="underlined"
              color="primary"
              v-model="user.secondName"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="place"
              label="Место работы"
              variant="underlined"
              color="primary"
              v-model="user.place"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="job"
              label="Должность"
              variant="underlined"
              color="primary"
              v-model="user.job"
              @update:modelValue="$emit('change')"
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
              @click="$emit('save')"
            >
              Сохранить
            </v-btn>
            <v-btn
              :disabled="!edited"
              color="error"
              @click="$emit('cancel')"
            >
              Отмена
            </v-btn>
          </div>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'EditingUserCommon',
  props: [
    'user',
    'edited'
  ],
  emits: [
    'save',
    'cancel',
    'change'
  ]
}
</script>
<style lang="">

</style>
