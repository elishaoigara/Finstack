import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Finstack dashboard heading', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText(/Welcome to Finstack Dashboard/i);
  expect(headingElement).toBeInTheDocument();
});
