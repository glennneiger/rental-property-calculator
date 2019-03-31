import axios from 'axios';
import { toast } from 'react-toastify';

import {
  DELETE_CALCULATION_WITH_ID,
  GET_ALL_CALCULATIONS,
  LOAD_CALCULATION
} from './constants';
import {
  setChangesMade,
  setCurrentTitle
} from './currentCalculation';
import { formatClientCalculationForServer } from '../utils/calculationUtils';

const titleCompare = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

export const getAllCalculations = () => dispatch => {
  let idsAndTitles = [];
  axios.get('/api/calculation/')
    .then(res => {
      idsAndTitles = res.data.map(calculation => ({
        id: calculation._id,
        title: calculation.title
      }));
      idsAndTitles.sort(titleCompare);
      dispatch({
        type: GET_ALL_CALCULATIONS,
        payload: idsAndTitles
      });
    })
    .catch(err => console.log(err));
};

export const getCalculationById = calculationId => dispatch => {
  axios.get(`/api/calculation/${calculationId}`)
    .then(res => {
      dispatch({
        type: LOAD_CALCULATION,
        payload: res.data.calculation
      });
      dispatch(setChangesMade(false));
      dispatch(setCurrentTitle(res.data.title));
    })
    .catch(err => console.log(err));
};

export const saveCalculation = (
  title,
  calculation,
  changesMade = null,
  setTitle = false,
  newCurrentTitle = null
) => dispatch => {
  const calcRequest = {
    title,
    calculation: formatClientCalculationForServer(calculation)
  };
  axios.post('/api/calculation', calcRequest)
    .then(() => {
      if (changesMade !== null) {
        dispatch(setChangesMade(changesMade));
      }
      if (setTitle) {
        dispatch(setCurrentTitle(newCurrentTitle));
      }
      toast.info('Calculation saved');
      dispatch(getAllCalculations());
    })
    .catch(err => console.log(err));
};

export const deleteCalculationWithId = calculationId => dispatch => {
  axios.delete(`/api/calculation/${calculationId}`)
    .then(() => {
      dispatch({
        type: DELETE_CALCULATION_WITH_ID,
        payload: {
          calculationId
        }
      });
    })
    .catch(err => console.log(err));
};