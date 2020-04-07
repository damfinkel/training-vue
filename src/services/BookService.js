import { api } from './api'

export const getBooks = () => {
  const response = api.get('/books')
  if (response.ok) {
    return response
  } else {
    // Temporary until the API works
    return { ok: true, data: [{ id: 1, title: 'Harry Potter and the Cursed Child', author: 'Autor del libro', img: 'https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg' }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }, { id: 1, title: 'Un titlo', author: 'Un autor', img: null }] }
  }
}
