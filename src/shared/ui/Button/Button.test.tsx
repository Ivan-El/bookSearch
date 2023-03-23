import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Back variant', () => {
    render(<Button variant={ButtonVariant.BACK}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('back');
  });
});
