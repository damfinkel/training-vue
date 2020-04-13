<template lang="pug">
  .cart-modal-container
    .modal-container
      button.close-button(@click="closeModal")
      h2.modal-title
        | Tu carrito de compras
      template(v-if="cartAmount === 0")
        img.empty-cart-image(src="../assets/ic-empty-cart.png" alt="Carrito vacío")
        h3.empty-cart-subtitle
          | El carrito está vacío
        h4.no-items-text
          | Parece que no tenés items en tu carrito de compras.
      template(v-else)
        .book-row(v-for="book in books" :key="book.id")
          span.book-info
            | {{ book.title }} - {{ book.author }}
          button.remove-book-button(@click="() => removeBookFromCart(book)")
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'CartModal',
  props: {
    closeModal: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters({ cartAmount: 'books/getCartAmount' }),
    ...mapState({ books: state => state.books.cart })
  },
  methods: {
    ...mapActions({ removeBook: 'books/removeBook' }),
    removeBookFromCart (book) {
      this.removeBook(book)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/colors';

.cart-modal-container {
  align-items: center;
  background-color: rgba($black, 0.5);
  bottom: -70px;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.modal-container {
  align-items: center;
  background-color: $white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 65%;
  max-width: 900px;
  padding: 24px;
  position: relative;
  width: 65%;
}

.close-button {
  background: url("../assets/ic-close.png") center/cover no-repeat;
  height: 24px;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 24px;
}

.modal-title {
  align-self: start;
  color: $black;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 90px;
}

.empty-cart-image {
  height: 168px;
  margin-bottom: 90px;
  width: 230px;
}

.empty-cart-subtitle {
  color: $black;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 600;
}

.no-items-text {
  color: $black;
  font-size: 24px;
  line-height: 28px;
}

.book-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid $grey;
  }
}

.book-info {
  font-size: 22px;
  line-height: 26px;
}

.remove-book-button {
  background: url('../assets/ic-trash.png') center/cover no-repeat;
  height: 24px;
  width: 19px;
}
</style>
