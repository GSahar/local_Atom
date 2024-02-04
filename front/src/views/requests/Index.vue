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
import store from '@/store';

export default {
  components:{
    'request-card': RequestCard
  },
  data: () => ({

  }),
  computed:{
    cards: function(){
      let requests = store.getters.getRequests;
      return requests.map(request => {
        let user = store.getters.getUser(request.user_id);
        console.log(request);
        let task = store.getters.getTask(request.task_id);
        let state = '';
        switch(request.status){
          case 'pending':
              state = 'На согласовании';
              break;
          case 'approved':
              state = 'Согласовано';
              break;
          case 'rejected':
              state = 'Отклонено';
              break;
        }
        return {
          id: request.id,
          user_id: request.user_id,
          user: user ? user.lastName + ' ' + user.firstName.substring(0,1) + '.' + user.secondName.substring(0,1) : '',
          task_id: request.task_id,
          task: task?.name??'',
          state: state
        }
      }

      );
    }
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
