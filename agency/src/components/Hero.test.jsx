import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, it, expect } from 'vitest';
import assets from '../assets/assets';

describe('Hero Component', () => {
  it('renders the component', () => {
    render(<Hero />);
    const heroElement = screen.getByRole('division', { id: 'hero' });
    expect(heroElement).toBeInTheDocument();
  });

  it('displays the text "Trusted by 10k+ people"', () => {
    render(<Hero />);
    const textElement = screen.getByText(/Trusted by 10k\+ people/i);
    expect(textElement).toBeInTheDocument();
  });

  it('displays the group profile image with the correct alt text', () => {
    render(<Hero />);
    const imageElement = screen.getByAltText(/group_profile/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain(assets.group_profile);
  });
});
