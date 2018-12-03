
const setFilterText = (text = '') => (

    {
        type:'SET_FILTER_TEXT',
        text
    }
)

const sortByDate = () => (
    {
        type:'SORT_BY_DATE',  
    }
)
const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
    }
)
const setStartDate = (start) => (
    {
        type:'SET_START_DATE',
        start
    }
)
const setEndDate = (end) => (
    {
        type:'SET_END_DATE',
        end
    }
)

export { setFilterText,sortByDate,sortByAmount,setStartDate,setEndDate }