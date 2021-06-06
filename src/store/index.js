import { createStore } from 'vuex';

const keepLiveRoute = ['modalView', 'home'];
export default createStore({
  state: {
    keepLiveRoute,
  },
  mutations: {
    ClearKeep(state) {
      if (state.keepLiveRoute.length > 0) state.keepLiveRoute = [];
    },
    SetKeep(state) {
      if (!state.keepLiveRoute.length > 0) state.keepLiveRoute = keepLiveRoute;
    },
  },
  actions: {
  },
  modules: {
  },
});
