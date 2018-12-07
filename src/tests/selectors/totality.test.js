import {expenses} from '../fixtures/expenses'
import sum, { sumUp } from '../../selectors/totality'


test('should return total amount', () => {

    const result = sum(expenses)
    expect(result).toEqual({amount:20655,exp:3})

})

test('should return 0 if ther is no expenses', () => {

    const result = sum([])
    expect(result).toEqual(0)
})

test('should correctly add up single expense', () => {

    const result = sum([expenses[0]])
    expect(result).toEqual({amount:155,exp:1})
})

test('should return total amount', () => {
    const result = sumUp(expenses)
    expect(result).toBe(20655)
})

test('should return 0 ', () => {
    const result = sumUp([])
    expect(result).toBe(0)
})