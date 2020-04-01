export const passwordFormat = value => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
}

export function watchFieldError (viewModel, errorTypes, errors, fieldName) {
  let error = null
  for (let i = 0; i < errorTypes.length; i++) {
    debugger
    const errorType = errorTypes[i]
    if (!viewModel[fieldName][errorType]) {
      error = errors[fieldName][errorType]
      break
    }
  }
  return error
}

export const REQUIRED_ERROR = 'Field is required'
