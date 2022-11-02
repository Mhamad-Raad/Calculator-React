import { fireEvent, render, screen } from '@testing-library/react';
import Home from './UI/Home';
import Quote from './UI/Quote';
import ClacHome from './UI/ClacHome';

describe('Testing Components', () => {
  test('Testing Homepage', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
  test('Testing Quotes', () => {
    const quotes = render(<Quote />);
    expect(quotes).toMatchSnapshot();
  });
  test('Testing Calculator', () => {
    const calculator = render(<ClacHome />);
    expect(calculator).toMatchSnapshot();
  });
});
