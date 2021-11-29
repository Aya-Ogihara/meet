import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';

// Components
import App from '../App';

const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user hasn’t specified the number of events', () => {
      AppWrapper = mount(<App />);
    });

    when('the user opens the app', () => {
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });

    then(/^(\d+) item of upcoming event list will be displayed$/, (arg0) => {
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user specified the number of events', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.number-of-event').simulate('change', {
        target: { value: 10 },
      });
    });

    when('the user open the app', () => {
      AppWrapper.update();
    });

    then(
      'specified number of item if upcoming event list will be displayed',
      () => {
        expect(AppWrapper.state('numberOfEvents')).toBe(10);
      }
    );
  });
});
