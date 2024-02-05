<template>
  <v-card
    class="h-100"
  >
   <v-form @submit.prevent="submit" v-model="valide">
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
              :rules="rules.default"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="firstName"
              label="Имя"
              variant="underlined"
              color="primary"
              v-model="user.firstName"
              :rules="rules.default"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="secondName"
              label="Отчество"
              variant="underlined"
              color="primary"
              v-model="user.secondName"
              :rules="rules.default"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="place"
              label="Место работы"
              variant="underlined"
              color="primary"
              v-model="user.place"
              :rules="rules.default"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="job"
              label="Должность"
              variant="underlined"
              color="primary"
              v-model="user.job"
              :rules="rules.default"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-divider
              style="margin-top: 40px;"
              color="primary"
              thickness="4px"
              theme="light"
            ></v-divider>
            <v-text-field
              name="email"
              label="Email"
              variant="underlined"
              color="primary"
              v-model="user.email"
              :rules="rules.email"
              @update:modelValue="$emit('change')"
            ></v-text-field>
            <v-text-field
              name="password"
              label="Пароль"
              variant="underlined"
              color="primary"
              v-model="user.password"
              :rules="rules.password"
              @update:modelValue="$emit('change')"
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols=2>
          <div class="d-flex justify-center">
            <v-img
              id="photo"
              height="250px"
              :src="user.photo" alt=""
            >
            <template v-slot:placeholder>
              <v-img
                id="photo"
                height="250px"
                src="@\assets\person-placeholder.jpg" alt=""
              ></v-img>
            </template>
            </v-img>
            <img >
          </div>
          <div class="d-flex flex-column w-100 mt-5 justify-center">
            <input type="file" id="photoInput" class="d-none">
            <v-btn
              color="general"
              class="mb-2"
              @click="addPhoto"
            >
              Выбрать фото
            </v-btn>
            <v-divider
              thickness="0"
              style="margin-top: 100px;"
            ></v-divider>
            <v-btn
              :disabled="!edited"
              color="success"
              class="mb-2"
              type="submit"
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
   </v-form>
  </v-card>
</template>
<script>
export default {
  name: 'EditingUserCommon',
  props: [
    'user',
    'edited',
    'exist'
  ],
  emits: [
    'save',
    'cancel',
    'change'
  ],
  data: () => ({
    valide: false,
  }),
  methods:{
    submit(){
      if(this.valide)
        this.$emit('save');
    },
    getDefaultRule(){
      return value => {
          if (!value || (value && value.length == 0)) return 'Заполните поле!';
          return true;
        }
    },
    getEmailRule(){
      return value => {
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) return 'Неверный Email!'
          return true;
        }
    },
    getPasswordRule(){
      return value => {
          if(this.exist && (!value || value.length == 0)) return true;
          if (!value ||
              (value &&
               (value.length == 0 ||
               !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value))))
            return 'Пароль должен содержать минимум 8 символов, одну цифру и одну букву!';
          return true;
        }
    },
    addPhoto(){
      let photoInput = document.getElementById('photoInput');
      photoInput.click();
      photoInput.addEventListener('change', e => {
        let fileURL = URL.createObjectURL(photoInput.files[0]);
        this.user.photo = fileURL;
        let photo = document.getElementById('photo');
        photo.setAttribute('src',fileURL);
      })
    }
  },
  computed: {
    rules: function(){
      return {
        default: [
          this.getDefaultRule()
        ],
        email: [
          this.getDefaultRule(),
          this.getEmailRule()
        ],
        password: [
          this.getPasswordRule()
        ],
      }
    }
  }
}
</script>
<style lang="">

</style>
