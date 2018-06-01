import axios from 'axios'

import {
  GET_ALL_CALCULATIONS,
  LOAD_CALCULATION,
  SET_CHANGES_MADE,
  SET_IS_SAVED
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
      dispatch({
        type: SET_CHANGES_MADE,
        payload: false
      })
      dispatch({
        type: SET_IS_SAVED,
        payload: true
      })
    })
    .catch(err => console.log(err))
}

export const saveCalculation = (title, calculation) => dispatch => {
  const calcRequest = {
    title,
    calculation
  }
  axios.post('/api/calculation/save', calcRequest)
    .then(() => {
      dispatch({
        type: SET_CHANGES_MADE,
        payload: false
      })
      dispatch({
        type: SET_IS_SAVED,
        payload: true
      })
      dispatch(getAllCalculations())
    })
    .catch(err => console.log(err))
}