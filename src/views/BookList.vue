<template lang="pug">
  .book-list-container
    book(v-for="book in books" :key="book.id" :book="book")
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
      books: []
    }
  },
  methods: {
    async fetchBooks () {
      const response = await getBooks()
      this.books = response.data
    }
  },
  mounted () {
    this.fetchBooks()
  }
}
</script>

<style lang="scss" scoped>
.book-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  height: 100vh;
  justify-content: space-between;
  padding: 50px 300px;
  gap: 20px 30px;
}
</style>
