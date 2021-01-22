# Jest

Studying to test React app from a udemy course

### What is TDD ?

- Test Driven Development is a way to develop a web-app that start with you writting tests that determine what the components will do or will "have". The basic idea is to constructure a list of expectations and code along to achieve it. This helps developers to have a better way to write code. Yes it will take longer but it will be easy to work with components when they have exact list of things to read and see to make sure everyone is on the same page.

- We will have some specific pros using TDD :
  - We have tests to guard every component that we need to, it mean when you create new components or change the structure of your databases, you can re-run these tests to check if it have any negative impact on your components that make your websites break.
  - We have "plan" to write code.
  - A demanding skill for developers that actual want to grow and survive in this industry.

### Setting Up Jest & Enzyme :

- Installing packages that related to Jest and Enzyme :

  - npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
  - npm install --save-dev enzyme jest-enzyme

- Setting Up Enzyme before working with it :

  ```javascript
  import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
  import Enzyme from "enzyme";
  Enzyme.configure({ adapter: new EnzymeAdapter() });
  ```

### Differences between unit tests and integration tests :

- Unit tests : test one piece of code
- Integration tests : how multiple units work together

#### Principles to writting tests :

- Writting tests somehow that won't require you to re-write tests after you re-factor your code
- Testing for what the app should do not how the app will work
- Writting tests that easy to diagnosis of failling tests

#### First unit test : Checking for rendering process

- First we need to add data-test attributes to the component that we need to test it rendering process, we use this over id and class because we won't include it in production build :

- Code that need to be tested :

```javascript
<div data-test="component-app">Counter</div>
```

- Testing :

```javascript
test("render without errors", () => {
  const wrapper = shallow(<Counter />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
```
