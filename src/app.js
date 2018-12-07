import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import AppRouter from './routes/Approuter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setFilterText} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'


const store = configureStore();
 

const jsx = (
    <Provider store = {store} > 
     <AppRouter />
    </Provider>
)

const score = [].reduce((sum,value) => sum + value,0)
console.log(score)


ReactDOM.render( jsx, document.querySelector('#app'))


// app js is in charge of only bootstrap things that live else where

// launcher


