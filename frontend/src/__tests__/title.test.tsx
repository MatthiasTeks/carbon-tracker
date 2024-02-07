import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Title from '@/components/example/Title';

describe('Title', () => {
  it('renders title component', () => {
    render(<Title />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('testTitre');
  });

  it('render the good content', () => {
    render(<Title />);
    const content = screen.getByText('testTitre');
    expect(content).toBeInTheDocument();
  });
});
