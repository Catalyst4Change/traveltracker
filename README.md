# Travel Tracker App
### Turing Mod 2 Final Solo Project by Catalyst

## Usage:
A user (traveler) has the ability to log in with specific credentials. One cannot log in without the correct username and password (traveler50, travel).

![login gif](https://github.com/Catalyst4Change/traveltracker/blob/main/TTlogIn.gif)

Once logged in, the traveler can view their all-time trip history as well as their expendatures for the last year. They can also create a new trip and have it immediately available on their list of trips.

![gif of creating new trip](https://github.com/Catalyst4Change/traveltracker/blob/main/TTnewTrip.gif)

## Features:
### Error Handling:
There is an alert at every step of each form. There is no way to enter null data or incorrect username/password without being notified.
### Responsive Layout:
I learned CSS Grid during this project and used a breakpoint to realign the elements according to screen width. If viewed on a device with less than 700px, the grid re-orients to a single column.
### Accessibility:
All form input items are tabbable. I used steppers instead of text input fields for numerical values for simplicity. Assuming no one is traveling for months or bringing hundreds of friends with them, it should not be an issue.
One problem I did have was making the 'Submit Trip Request' button tabbable. For whatever reason, even though I added `<tabindex="0">`, it just would not focus. However, both submit buttons work on pressing Enter in the form.
This project has zero errors in WAVE and a 100% score in LightHouse.
Accessibility features can be tested to the "accessability" branch.

## What I'm proud of:
The whole thing. With more time, I would have done more CSS-wise. However the simplistic, bold color scheme is kinda fun and I enjoyed taking a minute to make a creepy fish-man for the user avatar.
I'm proud that everything works as expected with no errors. 
I really really struggled getting started with this project. It seemed overwhelming and I couldn't find a place to start. At first I just kinda did a little bit of everything and got lost in it. With a pep-talk from my mentor I slowed down and devised a more deliberate plan to 'eat the elephant'.

## Lessons Learned:
I know that alerts are not the best way to handle information delivery to the user, and in the future would use more subtle methods.
Nested, string-based dates are very difficult to work with.
