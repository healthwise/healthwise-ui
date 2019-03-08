// Takes the keys of an object, and turns them into an object of generic action
// creator functions of the form:
//
// {
//   addTask: data => {
//     return { type: 'addTask', data: data }
//   },
//   removeTask: data => {
//     return { type: 'removeTask', data: data }
//   }
// }
export const createActions = actions => {
  return Object.keys(actions).reduce((actionCreators, key) => {
    actionCreators[key] = data => ({ type: key, data })
    return actionCreators
  }, {})
}

// Takes an object of functions that update the state in a reducer, and creates
// a reducer to wire up those functions.
//
// Example input:
// {
//   addTask: (state, action) => {
//     return [ ...state, action.data ]
//   },
//   removeTask: (state, action) => {
//     return state.filter(task => task.id !== action.data)
//   }
// }
export const createReducer = (initialState, actions) => {
  return (state = initialState, action = {}) => {
    const type = action.type
    return actions[type] ? actions[type].call(this, state, action) : { ...initialState, ...state }
  }
}
