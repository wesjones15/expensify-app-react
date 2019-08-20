import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={1} expenseTotal={195} />
    );
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={23} expenseTotal={1987966745} />
    );
    expect(wrapper).toMatchSnapshot();
});