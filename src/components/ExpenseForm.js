import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


export default class ExpenseForm extends React.Component {

constructor(props){
    super(props)
    this.state = {
     description: props.expense ? props.expense.description : '',
     note: props.expense ? props.expense.note : '',
     amount: props.expense ? (props.expense.amount / 100).toString() : '',
     createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
     calendarFocused:false,
     error:undefined
    }
}

setDescription = (event) => { // this = parent scope

    const description = event.target.value
    this.setState((prevState) => ({description}))

}
setNote = (event) => {
    const note = event.target.value
    this.setState((prevState) => ({note}))
}
setAmount = (event) => {
    const amount = event.target.value

    // amount.match(/^\d{1,}(\.\d{0,2})?$/) && this.setState((prevState) => ({amount}))
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState((prevState) => ({amount}))
    }
}
onDateChange = (createdAt) => { // that function takes as a argument moment object
    this.setState((prevState) => ({createdAt}))
}
onFocusChange = ({focused}) =>{
 this.setState((prevState) => ({ calendarFocused:focused }))
}
onSubmitHandler = (event) => {
    event.preventDefault()
    if(!this.state.description || !this.state.amount ){
    this.setState((prevState) => ({error:'Please provide description and amount'}))
    }
    else{
    this.setState((prevState) => ({error:undefined}))
    
    this.props.onSubmit({
        description:this.state.description,
        note:this.state.note,
        amount:parseFloat(this.state.amount),
        createdAt:this.state.createdAt.valueOf()
    })
    }
}

render(){
    return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.onSubmitHandler}>
        <input type ='text' placeholder ='Description' autoFocus value = {this.state.description}
        onChange ={this.setDescription}
        />
        <input type ='text' placeholder ='amount'
        value = {this.state.amount}
        onChange ={this.setAmount}
        />
        <SingleDatePicker 
        date = {this.state.createdAt}
        onDateChange = {this.onDateChange}
        focused = {this.state.calendarFocused}
        onFocusChange = {this.onFocusChange}
        numberOfMonths = {1}
        isOutsideRange = {() => false} // all days will be avaivable to choose, including past
        />
        <textarea placeholder ='Add a note to your expense' value ={this.state.note}
        onChange ={this.setNote}
        />
        <button>Add expense</button>
        </form>
        </div>
    )}
}

