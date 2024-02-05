<template>
      <router-view/>
</template>

<style lang="scss" >
  a{
    text-decoration: none;
    color: black;
  }
</style>
<script>
import router from './router';
import store from './store';

export default {
  methods:{
    getInitailData(){
      store.dispatch('getUsersFromDB');
      store.dispatch('getRolesFromDB');
      store.dispatch('getTasksFromDB');
      store.dispatch('getRequestsFromDB');
    },
    configureGuard(){
      router.beforeEach(async (to, from) => {
        const auth = await store.getters.getAuth;
        console.log(to);
        if (to.name != 'login' && !auth.email) {
          return {name: 'login'}
        }
        return true;
      })
    }
  },
  mounted: function(){
    this.getInitailData();
    this.configureGuard();
  }
}
</script>
