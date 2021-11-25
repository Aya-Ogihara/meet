import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvent /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
  NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-event')).toHaveLength(1)
  });

  // test('update the state of NumberOfEvents', () => {
  //   NumberOfEventsWrapper.setState({
  //     numberOfEvents: 5
  //   });
  //   const newNumberOfEvent = { target: { value: 5 }};
  //   NumberOfEventsWrapper.find('.number-of-event').simulate('change', newNumberOfEvent);
  //   expect(NumberOfEventsWrapper.state('NumberOfEvent')).toBe(5);
  // });

  test('render input from prop', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents')
    expect(NumberOfEventsWrapper.find('.number-of-event').prop('value')).toBe(numberOfEvents);
  });
})