<template>
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
</template>
<script>
export default {
  name: 'MyRequestCard',
  props: {
    card: {
      number: '',
        author: '',
        task: '',
        state: '',
        comment: ''
    }
  }
}
</script>
<style lang="scss">

</style>
