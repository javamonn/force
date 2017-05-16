import { push } from 'react-router-redux'

// Action types
export const INCREMENT_STEP = 'INCREMENT_STEP'
export const UPDATE_INPUTS = 'UPDATE_INPUTS'
export const UPDATE_SUBMISSION = 'UPDATE_SUBMISSION'

// Action creators
export function createSubmission () {
  return (dispatch) => {
    // TODO: async request to convection to create submission
    dispatch(updateSubmission()) // update state
    dispatch(incrementStep()) // move to next step
  }
}

export function incrementStep () {
  return {
    type: INCREMENT_STEP
  }
}

export function submitDescribeWork (values) {
  return (dispatch) => {
    dispatch(updateInputs(values)) // update the inputs in case we have to return
    dispatch(createSubmission()) // create the submission in convection
  }
}

export function submitPhoto () {
  return (dispatch) => {
    // this will come from the response of the PUT request to convection
    const dummySubmission = {
      id: 'subbymission',
      image_url: null
    }
    dispatch(updateSubmission(dummySubmission))
    dispatch(push('/consign2/submission/thank_you'))
  }
}

export function updateInputs (inputs) {
  return {
    type: UPDATE_INPUTS,
    payload: {
      inputs
    }
  }
}

export function updateSubmission (submission) {
  return {
    type: UPDATE_SUBMISSION,
    payload: {
      submission
    }
  }
}
