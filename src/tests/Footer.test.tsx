import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/layout/Footer';

describe('Given a Footer component', () => {
  it('Then it should be defined', () => {
    const textContent = 'Built by kasmickleva';

    render(<Footer />);
    expect(screen.getByText(textContent)).toBeDefined();
  });

  it('Then it should match snapshot', () => {
    expect(render(<Footer />)).toMatchSnapshot();
  });
});
