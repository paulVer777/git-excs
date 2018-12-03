import uuidv4 from 'uuid/v4'

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0

    } = {}) => (
    {
     type:'ADD_EXPENSE',
     expense:{
       id:uuidv4(),
       description,
       note,
       amount,
       createdAt
     }
    }
)

const removeExpense = ({id} = {}) => {

    return {
        type:'REMOVE_EXPENSE',
        id
    }

}
    


const editExpense = (id, update) => (

    {
        type:'EDIT_EXPENSE',
        id,
        update
    } 
)

  


    
export {addExpense,removeExpense,editExpense}