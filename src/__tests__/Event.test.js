import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('An event element is collapsed by default.', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('Event detail is hidden', () => {
    expect(EventWrapper.find('.event-detail--hide')).toHaveLength(1);
  });

  test('Event summary is displayed', () => {
    expect(EventWrapper.find('.event-summary')).toHaveLength(1);
  });

  test('Event date is displayed', () => {
    expect(EventWrapper.find('.event-date')).toHaveLength(1);
  });

  test('Event time zone is displayed', () => {
    expect(EventWrapper.find('.event-time-zone')).toHaveLength(1);
  });

  test('User can expand an event to see its details by clicking button', () => {
    EventWrapper.setState({
      collapsed: true
    });
    EventWrapper.find('.toggle-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('Event description is displayed', () => {
    EventWrapper.setState({
      collapsed: false
    });
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

  test('Event organizer is displayed', () => {
    EventWrapper.setState({
      collapsed: false
    });
    expect(EventWrapper.find('.event-organizer')).toHaveLength(1);
  });

  test('User can collapse an event to hide its details by clicking button', () => {
    EventWrapper.setState({
      collapsed: false
    });
    EventWrapper.find('.toggle-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

})