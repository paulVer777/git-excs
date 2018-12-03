import {setFilterText,setEndDate,setStartDate, sortByAmount,sortByDate} from '../../actions/filters'
import moment from 'moment' 


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))  
    expect(action).toEqual({
        type:'SET_START_DATE',
        start:moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))  
    expect(action).toEqual({
        type:'SET_END_DATE',
        end:moment(0)
    })
})

test('should generate filter text action object', () => {
    const action = setFilterText('hejo')
    expect(action).toEqual({
        type:'SET_FILTER_TEXT',
        text:'hejo'
    })
})

test('should generate filter text action object', () => {
    const action = setFilterText()
    expect(action).toEqual({
        type:'SET_FILTER_TEXT',
        text:''
    })
})

test('should generate sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',  
    })
})

test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({
      type:expect.any(String)
  })
})