React and Redux Assesment
This is a web app that retrieve data for an api of a Gnome town called Brastlewark. The UI shows all this data to the users and also include some filters to quickly browse an specific individual and see all the details.

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Built With
React - The JavaScript framework used
Redux - Redux is a library for application state management.
Redux-Thunk -

Why Redux and Redux-Thunk?
I used Redux because the same state needs to be shared between multiple components and those components doesn’t belong to the same tree hierarch. In redux we have a store, actions and reducers. Here, the data flow is uni-directional and we can have a decoupled design where data management is separated from the UI.

I used Thunk because Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

Authors
Agustin Alberdi.