const state = () => {
  return {
    all: [],
  }
}

const actions = {}

const mutations = {
  setTeams(state, teams) {
    state.all = teams
  },
}

const getters = {
  teamById: (state) => (id) => state.all.find((team) => team.id === id),
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
