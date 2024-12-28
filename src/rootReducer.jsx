import { combineReducers } from 'redux'

import LandingPageSlice from './features/LandingPage/LandingPageSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  LandingPageSlice: LandingPageSlice,
})

export default rootReducer 