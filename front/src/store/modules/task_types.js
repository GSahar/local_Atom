import common from "@/services/common";
import DB from '@/store/db/db';
import fake from "../db/fake";

export default {
  state: {
    task_types: fake.task_types
  },
  getters: {
    getTaskType: (state) => (typeId) => {
      return state.task_types.find(type => type.id == typeId);
    }
  },
  mutations: {

  },
  actions: {

  },

}
