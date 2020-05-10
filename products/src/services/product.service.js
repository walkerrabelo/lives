import { ajax } from 'rxjs/ajax'

export const getProducts = () => ajax.getJSON('https://challenge-backend.herokuapp.com/products')