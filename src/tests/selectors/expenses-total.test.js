import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test("should return 0 if no expenses", () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
    const result = getExpensesTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});

test("should return sum of visible expenses", () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});