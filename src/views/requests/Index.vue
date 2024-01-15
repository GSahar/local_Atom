<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards">
        <v-card height="250px" width="300px">

          <v-card-item >

              <v-card-title>Заявка {{ card.number }}</v-card-title>
                <div class="my-3 request-body" style="height: 125px;">
                  <p><strong>Инициатор заявки:</strong>  {{ card.author }}</p>
                  <p><strong>Приложение:</strong>  {{ card.task }}</p>
                  <p><strong>Стадия согласования:</strong>  {{ card.state }}</p>
                  <p><strong>Комментарий:</strong>  {{ card.comment }}</p>
                </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Согласовать</v-btn>
              </v-card-actions>
        </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
   return { cards: [
      {
        number: '1',
        author: 'Иванов И.И.',
        task: 'Личный кабинет',
        state: 'Согласовано руководителем',
        comment: ''
      },
      {
        number: '2',
        author: 'Иванов И.И.',
        task: 'Личный кабинет',
        state: 'Согласовано руководителем',
        comment: ''
      },
      {
        number: '3',
        author: 'Иванов И.И.',
        task: 'Личный кабинет',
        state: 'Согласовано руководителем',
        comment: ''
      },
      {
        number: '4',
        author: 'Петров П.П,',
        task: 'Личный кабинет',
        state: 'Заявка отклонена',
        comment: 'Заявка отклонена по причине недостаточного основания на предоставление доступа'
      },
      {
        number: '5',
        author: 'Иванов И.И.',
        task: 'Личный кабинет',
        state: 'Согласовано руководителем',
        comment: ''
      }
    ]}
  }
}
</script>
<style lang="scss">
.request-body{
  overflow: hidden;
  p{
      font-size: 14px;
    text-overflow: ellipsis;
  }
}
</style>
