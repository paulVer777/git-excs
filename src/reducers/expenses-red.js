
const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
        // return state.concat(action.expense)  it returns new array(push changes the original array)
        return [...state,action.expense] // spread operator returns new value ( new array in this case)

        case 'REMOVE_EXPENSE':
        return state.filter((value,index) => value.id !== action.id)

        case 'EDIT_EXPENSE':
    
            return state.map((value,index) => {
            
            if(value.id === action.id){

                return {
                    ...value,
                    ...action.update // here we returning all properties from object (...value) and then passing object with
                    //properties we want to update, if these two objects have same property, the property from update object will be used because we pass that object at the end  
                }
            }  
            else return value
            
        })

            default :
            return state;
        }
}

export default expenseReducer