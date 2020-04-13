import Vue from 'vue'
import Vuex from 'vuex'
import { getBooks } from './services/BookService'

Vue.use(Vuex)

const books = {
  namespaced: true,
  state: {
    bookList: [],
    filter: '',
    cart: []
  },
  getters: {
    getFilteredBooks: (state) => state.bookList.filter(book => book.title.toLowerCase().includes(state.filter.toLowerCase())),
    getCartAmount: (state) => state.cart.length
  },
  mutations: {
    setBooks: (state, payload) => (state.bookList = payload.books),
    setFilter: (state, payload) => (state.filter = payload),
    addBookToCart: (state, payload) => (state.cart = [...state.cart, payload]),
    removeBookFromCart: (state, payload) => {
      const bookIndex = state.cart.findIndex(book => book.id === payload.id)
      state.cart = [...state.cart.slice(0, bookIndex), ...state.cart.slice(bookIndex + 1)]
    }
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
    },
    addBook: ({ commit }, book) => {
      commit('addBookToCart', book)
    },
    removeBook: ({ commit }, book) => {
      commit('removeBookFromCart', book)
    }
  }
}

export default new Vuex.Store({
  modules: {
    books
  }
})
