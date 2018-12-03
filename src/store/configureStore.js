import {createStore,combineReducers} from 'redux'
import expenseReducer from '../reducers/expenses-red'
import filtersReducer from '../reducers/filters-red'


export default () => {

const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filter: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store 
}

