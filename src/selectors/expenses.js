import moment from 'moment'

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
 
    return expenses.filter((value,index) => {
   
      const createdAtMoment = moment(value.createdAt)
      
      const startDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true
      const endDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true
      // const startDateMatch = typeof startDate !== 'number' || value.createdAt >= startDate
      // const endDateMatch = typeof endDate !== 'number' || value.createdAt <= endDate
      const textMatch = value.description.toLowerCase().includes(text.toLowerCase())
   
      return startDateMatch && endDateMatch && textMatch // checks if item should pass criteria and be returned
   
    }).sort((a,b) => {

      if(sortBy === 'date'){
        return a.createdAt > b.createdAt ? -1 : 1
      }
      else if(sortBy === 'amount'){
        return a.amount > b.amount ? -1 : 1
      }
    })
   }
   
   export default getVisibleExpenses


   //this function gets actual state and returns new array base of filter object values.