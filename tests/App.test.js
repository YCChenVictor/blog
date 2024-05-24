import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

// Define a test suite for the App component
describe('App', () => {
  // Define a test case: "renders App component without crashing"
  test('renders App component without crashing', () => {
    // Use react-test-renderer to render the App component
    const component = renderer.create(<App />);
    // Convert the rendered component to a JSON object
    let tree = component.toJSON();
    // Compare the JSON object to a snapshot
    // If the snapshot doesn't exist or doesn't match the JSON object, the test will fail
    expect(tree).toMatchSnapshot(); // What's the snapshot?
  });
});
