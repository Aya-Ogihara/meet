import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';

// Components
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/ShowHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let EventListWrapper;
    given('a list of upcoming events is displayed', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
    let EventWrapper;
    when('each event detail is hidden', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.find('.event-detail--hide')).toHaveLength(1);
    });

    then('the user can check a list of upcoming events', () => {
      // This is tested in given test
    });
  });

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    let EventListWrapper;
    given('a list of upcoming events is displayed', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
    let EventWrapper;
    when('the user clicks ‘show detail’ button in an event item', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find('.toggle-btn').simulate('click');
    });

    then('the user can check the detail of the event', () => {
      expect(EventWrapper.find('.event-detail--show')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    let EventWrapper;
    given('an event detail is displayed', async () => {
      EventWrapper = await shallow(<Event event={mockData[0]} />);
      EventWrapper.find('.toggle-btn').simulate('click');
      expect(EventWrapper.find('.event-detail--show')).toHaveLength(1);
    });

    when('the user clicks ‘hide detail’ button in the event detail', () => {
      EventWrapper.find('.toggle-btn').simulate('click');
    });

    let EventListWrapper;
    then('a list of upcoming events is displayed', () => {
      expect(EventWrapper.find('.event-detail--hide')).toHaveLength(1);
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });
});
