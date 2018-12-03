import React from 'react'
import { connect } from 'react-redux';
import {setFilterText} from '../actions/filters'
import {sortByDate, sortByAmount, setEndDate, setStartDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component {
 constructor(props){
    super(props)
    this.state = {
        calendarFocused:null
    }
 }
onDatesChange = ({startDate, endDate}) => { // this function is going to be called by the react dates library
                        // its going to be caled with an object and on that object we are going to have 
                        //an start date and end date. (we destructure this object explicitly)
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
}
onFocusChange = (calendarFocused) => {
this.setState((prevState) => ({calendarFocused}))
}

onTextChange = (e) => this.props.setFilterText(e.target.value)

onSortChange = (e) => e.target.value === 'date' ? this.props.sortByDate : this.props.sortByAmount


render(){

return (

    <div>
    <input type = 'text' value = {this.props.filters.text} onChange = {this.onTextChange} />
    <select onChange = {this.onSortChange} value = {this.props.filters.sortBy} >
    <option value = 'date' >By date</option>
    <option value = 'amount' >By amount</option>
    </select>
    <DateRangePicker
    startDate = {this.props.filters.startDate}
    endDate = {this.props.filters.endDate}
    onDatesChange = {this.onDatesChange} //what we do when the dates change
    focusedInput = {this.state.calendarFocused}
    onFocusChange = {this.onFocusChange}
    numberOfMonths = {1}
    isOutsideRange = {()=> false}
    showClearDates = {true}
    />
    </div>

)}
}
   
const mapStateToProps = (state) => ({
    filters:state.filter
})


const mapDispatchToProps = (dispatch) => ({

    setFilterText:(text) => dispatch(setFilterText(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)

