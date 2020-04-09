import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from './services/BookService'

Vue.use(Vuex)

const books = {
  namespaced: true,
  state: {
    bookList: [],
    filter: ''
  },
  getters: {
    getFilteredBooks: (state) => {
      return state.bookList.filter(book => book.title.toLowerCase().includes(state.filter.toLowerCase()))
    }
  },
  mutations: {
    setBooks: (state, payload) => (state.bookList = payload.books),
    setFilter: (state, payload) => (state.filter = payload)
  },
  actions: {
    getBooks: async ({ commit }) => {
      const response = await getBooks()
      if (response.ok) {
        commit('setBooks', { books: response.data })
      }
    },
    setFilter ({ commit }, filter) {
      commit('setFilter', filter)
    }
  }
}

export default new Vuex.Store({
  modules: {
    books
  }
})
