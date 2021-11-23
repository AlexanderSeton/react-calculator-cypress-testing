import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {

  let container;

  beforeEach(() => {
    container = mount(<Calculator />);
  });

  it('Should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it("Should be able to add a number to another number", () => {
    const button1 = container.find("#number1");
    button1.simulate("click");
    const buttonAdd = container.find("#operator_add");
    buttonAdd.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const buttonEquals = container.find("#operator-equals");
    buttonEquals.simulate("click");
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("5");
  });

  it("Should be able to subtract a number from another number", () => {
    const button7 = container.find("#number7");
    button7.simulate("click");
    const buttonSubtract = container.find("#operator-subtract");
    buttonSubtract.simulate("click");
    const button4 = container.find("#number4");
    button4.simulate("click");
    const buttonEquals = container.find("#operator-equals");
    buttonEquals.simulate("click");
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("3");
  });

  it("Should be able to multiply a number by another number", () => {
    const button3 = container.find("#number3");
    button3.simulate("click");
    const buttonMultiply = container.find("#operator-multiply");
    buttonMultiply.simulate("click");
    const button5 = container.find("#number5");
    button5.simulate("click");
    const buttonEquals = container.find("#operator-equals");
    buttonEquals.simulate("click");
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("15");
  });

  it("Should be able to divide a number by another number", () => {
    const button2 = container.find("#number2");
    button2.simulate("click");
    const button1 = container.find("#number1");
    button1.simulate("click");
    const buttonDivide = container.find("#operator-divide");
    buttonDivide.simulate("click");
    const button7 = container.find("#number7");
    button7.simulate("click");
    const buttonEquals = container.find("#operator-equals");
    buttonEquals.simulate("click");
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual("3");
  });

});
