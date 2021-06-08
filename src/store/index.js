import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import taskReducer from './modules/task'
const rootReducer = combineReducers({
    task: taskReducer
})

//, applyMiddleware(logger)
const store = createStore(rootReducer)

export default store