import { api } from './api'

export const getBooks = () => {
  const response = api.get('/books')
  if (response.ok) {
    return response
  } else {
    // Temporary until the API works
    return { ok: true, data: [{ id: 1, title: 'Harry Potter and the Cursed Child', author: 'Autor del libro', img: 'https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg' }, { id: 2, title: 'Un titlo', author: 'Un autor', img: null }, { id: 3, title: 'Un titlo', author: 'Un autor', img: null }, { id: 4, title: 'Un titlo', author: 'Un autor', img: null }, { id: 5, title: 'Un titlo', author: 'Un autor', img: null }, { id: 6, title: 'Un titlo', author: 'Un autor', img: null }, { id: 7, title: 'Un titlo', author: 'Un autor', img: null }, { id: 8, title: 'Un titlo', author: 'Un autor', img: null }, { id: 9, title: 'Un titlo', author: 'Un autor', img: null }] }
  }
}
