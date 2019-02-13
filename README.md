React and Redux Assesment
This is a web app that retrieve data for an api of a Gnome town called Brastlewark. The UI shows all this data to the users and also include some filters to quickly browse an specific individual and see all the details.

Running the tests
npm run test to test the app with Jest
I tried to make a test with Jest but it's not working. It's my first time using Jest and I decided to use it as a recommendation of the react documentation.

Built With
React - The JavaScript framework used.
Redux - Redux is a library for application state management.
Redux-Thunk - Middleware for basic Redux side effects logic.

Why Redux and Redux-Thunk?
I used Redux because the same state needs to be shared between multiple components and those components doesn’t belong to the same tree hierarch. In redux we have a store, actions and reducers. Here, the data flow is uni-directional and we can have a decoupled design where data management is separated from the UI.

I used Thunk because Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
This helped me to create actions as functions and also make a request to the api to retrieve the data of Brastlewark.

Authors
Agustin Alberdi.