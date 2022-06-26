import Greeting from "./components/Greeting";
import Async from "./components/Async";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Async />
      <br />
      <Greeting />
    </div>
  );
}

export default App;

/*
Manual Testing - write certain code to implement a feature / fix an issue, then preview and test it in the browser. It is very important as we see what the users will usually see in the app. But it is error-prone; it is hard to test all possible combinations and scenarios.

Automated Testing - write certain code that runs and tests main application code, good for testing everything. This involves writing code to test individual building blocks of our app, but testing all these blocks at once whenever any changes are made to any part of the app.

Different types of Automated Tests:
1. Unit Tests - test the individual building blocks (ex: functions, components) in isolation, by writing tests for the smallest possible units of our application. Projects typically contain dozens or hundreds of unit tests. This is the most common / important kind of test.

2. Integration Tests - test the combination of multiple building blocks to ensure multiple components of app are working together. Projects typically contain a couple of integration tests.

3. End-to-End (e2e) Tests - testing entire workflows / complete scenarios in our app as the user would experience them, like logging a user in and going to a certain page. Projects typically contain very few e2e tests.

Jest is a popular tool to run tests and assert results. React Testing Library can be used to "simulate" (render) React app / components. Both are pre-installed when create-react-app is used.

Writing tests consists of 3 stages:
1. Arrange - set up the test data, test conditions and test environment
2. Act - run logic that should be tested (example: execute functions)
3. Assert - compare execution results with expected results

Multiple tests (belonging to a feature / component) can be grouped under testing suites, which can be created using 'describe()' and putting multiple test() functions under it
*/
