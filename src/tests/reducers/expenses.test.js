import expensesReducer from '../../reducers/expenses-red'
import {expenses} from '../fixtures/expenses'


test('should setup default data', () => {
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should add an expense', () => {


    const expense = {
        type:'ADD_EXPENSE',
        expense:{
            title:'New expense',
            id:'55'

        }
    }

    const state = expensesReducer(expenses,expense)
    expect(state).toEqual([...expenses,{title:'New expense',id:'55'}])
})

test('should update an expense', () => {

    const edit = {
        type:'EDIT_EXPENSE',
        id:3,
        update:{
            description:'Edited'
        }
    }
    const state = expensesReducer(expenses,edit)
    expect(state).toEqual([expenses[0],expenses[1],{
        ...expenses[2],
        description:'Edited',
        }])
})

test('should not update an expense if id is valid', () => {

    const edit = {
        type:'EDIT_EXPENSE',
        id:23,
        update:{
            description:'Edited'
        }
    }
    const state = expensesReducer(expenses,edit)
    expect(state).toEqual(expenses)
})