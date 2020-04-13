<template lang="pug">
  .book-container
    img.book-image(:src="book.img" :alt="book.title")
    h3.book-title {{ book.title }}
    span.book-author {{ book.author }}
    button.add-to-cart(v-show="!cart.some(cartBook => book.id === cartBook.id)" @click="addBook")
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({ cart: state => state.books.cart })
  },
  methods: {
    ...mapActions({ addBookToCart: 'books/addBook' }),
    addBook () {
      this.addBookToCart(this.book)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/application.scss';

.book-container {
  align-items: start;
  background-color: white;
  box-shadow: 3px 4px 5px 0px rgba(100, 100, 100, 0.8);
  display: flex;
  flex-direction: column;
  height: 315px;
  padding: 20px;
  position: relative;
  width: 100%;
}

.book-image {
  height: 75%;
  margin-bottom: 20px;
  object-fit: contain;
  object-position: top;
  width: 100%;
}

.book-title {
  font-weight: 600;
  margin-bottom: 10px;
  text-align: start;
}

.add-to-cart {
  background-color: $blue;
  background: url('../assets/btn_add_to_cart.png') center/cover no-repeat;
  bottom: 8px;
  height: 32px;
  position: absolute;
  right: 8px;
  width: 31px;
}

</style>
