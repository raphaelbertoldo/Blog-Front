import Vuex from "vuex";

const createStore = (_) => {
  return new Vuex.Store({
    state: {
      user: {},
    },
    getters: {
      // women: (state) => filter(state.products, "category", "women"),
      // men: (state) => filter(state.products, "category", "men"),
      // sale: (state) => filter(state.products, "sale", true),
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
    },
  });
};

export default createStore;
