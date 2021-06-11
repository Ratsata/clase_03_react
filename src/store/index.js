import { createStore, combineReducers } from 'redux'
import taskReducer from './modules/task'
import searchReducer from './modules/search'

const rootReducer = combineReducers({
    task: taskReducer,
    search: searchReducer
})

const store = createStore(rootReducer)

export default store