import Vuex from "vuex";

const createStore = (_) => {
  return new Vuex.Store({
    state: {
      user: {},
    },
    getters: {},
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
    },
  });
};

export default createStore;
