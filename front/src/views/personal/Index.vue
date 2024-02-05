<template>
 <v-layout
  class="h-100"
 >
  <v-card
    class="h-100 w-100"
  >
    <v-card-title primary-title>
      Личный кабинет
    </v-card-title>

    <v-tabs
      v-model="tab"
      color="primary"
      slider-color="primary"
    >
      <v-tab
        :value="1"
      >
        Информационные ресурсы
      </v-tab>
      <v-tab
        :value="2"
      >
        Мои заявки
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        :value="1"
        :key="1"
      >
        <personal-tasks></personal-tasks>
      </v-window-item>
      <v-window-item
        :value="2"
        :key="2"
      >
        <personal-requests></personal-requests>
      </v-window-item>
    </v-window>
  </v-card>
 </v-layout>
</template>
<script>
import PersonalTasks from '@/components/personal/Tasks.vue'
import PersonalRequests from '@/components/personal/Requests.vue'

export default {
  components: {
    'personal-tasks': PersonalTasks,
    'personal-requests': PersonalRequests
  },
  data: () => ({
    tab: null
  })
}
</script>
<style lang="">

</style>
