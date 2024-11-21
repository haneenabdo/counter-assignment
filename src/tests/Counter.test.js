// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react'
// import the Counter component here
import Counter from "../components/Counter"



beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/counter/i);
  expect (counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText('0');
  expect (initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  expect (screen.getByText('1')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  expect (screen.getByText('-1')).toBeInTheDocument();
});
