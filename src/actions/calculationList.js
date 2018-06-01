import axios from 'axios'

import {
  GET_ALL_CALCULATIONS,
  LOAD_CALCULATION
} from './constants'

export const getAllCalculations = () => dispatch => {
  let idsAndTitles = []
  axios.get('/api/calculation/')
    .then(res => {
      idsAndTitles = res.data.map(calculation => ({
        id: calculation._id,
        title: calculation.title
      }))
      dispatch({
        type: GET_ALL_CALCULATIONS,
        payload: idsAndTitles
      })
    })
    .catch(err => console.log(err))
}

export const getCalculationById = calculationId => dispatch => {
  axios.get(`/api/calculation/${calculationId}`)
    .then(res => {
      dispatch({
        type: LOAD_CALCULATION,
        payload: res.data.calculation
      })
    })
    .catch(err => console.log(err))
}