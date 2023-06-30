import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from './configureStore'; // Import your Redux store configuration
import App from './App';

test('renders learn react link', () => {
  const store = configureStore(); // Create an instance of your Redux store
  
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
