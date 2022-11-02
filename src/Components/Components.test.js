import { fireEvent, render, screen } from '@testing-library/react';
import Home from '../Components/UI/Home';

describe('Testing Components', () => {
  test('Testing Homepage', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
