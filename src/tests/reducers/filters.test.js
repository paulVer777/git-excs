import filtersReducer from '../../reducers/filters-red'


test('should setup filter text', ()=> {

    const currentState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const state = filtersReducer(undefined , {type:'SET_FILTER_TEXT',text:'energy'})
    expect(state.text).toBe('energy')
})

test('should setup start date filter', ()=> {

    const currentState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const state = filtersReducer(undefined , {type:'SET_START_DATE',start:223311})
    expect(state.startDate).toBe(223311)
})

test('should setup end date filter', ()=> {

    const currentState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }

    const state = filtersReducer(undefined , {type:'SET_END_DATE',end:223311})
    expect(state.endDate).toBe(223311)
})