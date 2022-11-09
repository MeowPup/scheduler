# Interview Scheduler

## About
 Using the latest tools and techniques, we build and test a React application that allows users to book and cancel interviews. We combine a concise API with a WebSocket server to build a realtime experience.

 ## Features 

 !["Interviews can be booked between Monday and Friday"](https://github.com/MeowPup/scheduler/blob/master/docs/scheduler-homepage.png?raw=true)

 !["A user can book an interview in an empty appointment slot"](https://github.com/MeowPup/scheduler/blob/master/docs/new-interview.png?raw=true)

 !["A user can cancel an existing interview"](https://github.com/MeowPup/scheduler/blob/master/docs/delete-interview.png?raw=true)

 !["A user can edit the details of an existing interview"](https://github.com/MeowPup/scheduler/blob/master/docs/Edit-interview.png?raw=true)

 ## Other notable features
 - The list of days informs the user how many slots are available for each day.
 - The expected day updates the number of spots available when an interview is booked or canceled.
 - A user is shown an error if an interview cannot be saved or deleted.
 - A user is shown a status indicator while asynchronous operations are in progress.
 - When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
 - The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
