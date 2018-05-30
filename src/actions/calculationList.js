import axios from 'axios'

import {
  GET_ALL_CALCULATIONS
} from './constants'

export const getAllCalculations = () => dispatch => {
  let idsAndTitles = []
  axios.get('/api/calculation/')
    .then(res => {
      res.data.forEach(calculation => idsAndTitles.push({
        id: calculation.id,
        title: calculation.title
      }))
    })
    .catch(err => console.log(err))
  dispatch({
    type: GET_ALL_CALCULATIONS,
    payload: idsAndTitles
  })
}