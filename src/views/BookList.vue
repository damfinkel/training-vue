<template lang="pug">
  .book-list-container
    input.book-filter-input(placeholder="Buscá por título de libro..." v-model="filter")
    .book-list
      book(v-for="book in filteredBooks" :key="book.id" :book="book")
</template>

<script>
import { getBooks } from '@/services/BookService'
import Book from '@/components/Book'

export default {
  name: 'BookList',
  components: {
    Book
  },
  data () {
    return {
      books: [],
      filter: ''
    }
  },
  methods: {
    async fetchBooks () {
      const response = await getBooks()
      this.books = response.data
    }
  },
  computed: {
    filteredBooks () {
      return this.books.filter(book => book.title.toLowerCase().includes(this.filter.toLowerCase()))
    }
  },
  mounted () {
    this.fetchBooks()
  }
}
</script>

<style lang="scss" scoped>
.book-list-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px 300px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  justify-content: space-between;
  gap: 20px 30px;
  padding: 50px 0;
}

.book-filter-input {
  align-self: center;
  font-size: 20px;
  height: 50px;
  line-height: 20px;
  min-height: 50px;
  padding: 15px;
  width: 70%
}
</style>
