<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards">
        <request-card :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RequestCard from '@/components/request/Card.vue';
export default {
  components:{
    'request-card': RequestCard
  },
  data() {
   return {
    cards: [
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
