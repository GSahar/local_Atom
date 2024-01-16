<template>
  <v-app
  style="background: -webkit-linear-gradient(90deg, #039140,#38ad46,#57ff92);
         background: linear-gradient(90deg, #039140,#38ad46,#57ff92);">
    <v-content>
      <div class="d-flex align-center justify-center flex-wrap text-center" style="height: 100vh;">
        <v-card
          class="mx-auto px-5 py-3"
          width="360"
          title="Смена пароля"
        >
          <v-container>

            <v-text-field
              v-model="password"
              color="primary"
              label="Пароль"
              variant="underlined"
            ></v-text-field>
            <v-text-field
              v-model="passwordConfirmation"
              color="primary"
              label="Повторите пароль"
              variant="underlined"
            ></v-text-field>

          </v-container>

          <div class="text-start w-100 my-2 ms-1"><router-link to="/login">Войти в аккаунт</router-link></div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="success">
              Подтвердить
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-content>
  </v-app>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>
