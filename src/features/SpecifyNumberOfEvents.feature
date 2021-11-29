Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the user hasn’t specified the number of events
When the user opens the app
Then 32 item of upcoming event list will be displayed

Scenario: User can change the number of events they want to see.
Given the user specified the number of events 
When the user open the app
Then specified number of item if upcoming event list will be displayed
