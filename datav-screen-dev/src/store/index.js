import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    number: 100
  },
  mutations: {
    SET_NUMBER(state, value) {
      state.number = value
    }
  },
  actions: {
    setNumber({ commit }, value) {
      commit('SET_NUMBER', value)
    }
  },
  modules: {
    a: {
      state: {
        aa: 11
      },
      mutations: {
        SET_AA(state, value) {
          state.aa = value
        }
      }
    },
    b: {
      state: {
        bb: 22
      },
      mutations: {
        SET_BB(state, value) {
          state.bb = value
        }
      }
    }
  },
  getters: {
    aaValue: (state) => state.a.aa,
    bbValue: (state) => state.b.bb
  }
})
