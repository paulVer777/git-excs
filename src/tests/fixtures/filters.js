import moment from 'moment'

const filters = {
    text:'',
    startDate:undefined, 
    endDate:undefined,
    sortBy:'date'
}

const altFilters = {
    text:'bills',
    startDate:moment(0), 
    endDate:moment().add(3, 'days'),
    sortBy:'amount'
}

export {filters, altFilters} 