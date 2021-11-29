Feature: SHOW/HIDE AN EVENT’S DETAILS

Scenario: An event element is collapsed by default.
Given a list of upcoming events is displayed
When each event detail is hidden
Then the user can check a list of upcoming events

Scenario: User can expand an event to see its details.
Given a list of upcoming events is displayed
When the user clicks ‘show detail’ button in an event item
Then the user can check the detail of the event

Scenario: User can collapse an event to hide its details.
Given an event detail is displayed
When the user clicks ‘hide detail’ button in the event detail
Then a list of upcoming events is displayed
