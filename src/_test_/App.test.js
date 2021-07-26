import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'

test('Header renders correctly', () => {
  const application = render(<App />);
  const headerElement = application.Header

  expect(headerElement).toBeCalled
})



