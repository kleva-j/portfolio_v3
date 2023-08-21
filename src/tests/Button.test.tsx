/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/ui/Button';

describe('Given a Button component', () => {
  const textContent = 'Sample Button';

  describe('When it receives a text', () => {
    it('Then it should match snapshot', () => {
      const { asFragment } = render(<Button>{textContent}</Button>);
      expect(asFragment().firstChild).toMatchInlineSnapshot(
        `
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Sample Button
          </button>
        `
      );
    });
  });

  describe('When it receives a function and the user clicks the button', () => {
    it('Then received function should be called', async () => {
      const handleClick = vi.fn();

      render(<Button onClick={handleClick}>{textContent}</Button>);
      fireEvent.click(screen.getByText(textContent));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
