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
 
console.log(store)


store.dispatch(addExpense({description:'gas bill', note:'bill', amount:30000}))
store.dispatch(addExpense({description:'water bill', note:'bill', amount:500}))
store.dispatch(addExpense({description:'rent', note:'bill', amount:500,createdAt:1000}))



const jsx = (
    <Provider store = {store} > 
     <AppRouter />
    </Provider>
)




const mix = []
const usedNumbs = []



while(usedNumbs.length < 7){

const numb = Math.floor( Math.random() * 8 )  

if(!usedNumbs.includes(numb)){
    mix[numb] = 's'
    usedNumbs.push(numb)
}

}




console.log(usedNumbs)





















ReactDOM.render( jsx, document.querySelector('#app'))


// app js is in charge of only bootstrap things that live else where

// launcher


