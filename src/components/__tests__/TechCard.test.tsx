import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TechCard from '../TechCard';

describe('TechCard', () => {
  const defaultProps = {
    name: 'React',
    icon: '⚛️',
    color: 'hsl(195, 100%, 50%)',
  };

  it('renders the tech card with name and icon', () => {
    render(<TechCard {...defaultProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('⚛️')).toBeInTheDocument();
  });

  it('applies custom delay prop', () => {
    const { container } = render(<TechCard {...defaultProps} delay={0.5} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with different tech stack items', () => {
    const techItems = [
      { name: 'TypeScript', icon: '📘', color: 'hsl(210, 100%, 50%)' },
      { name: 'Node.js', icon: '🟢', color: 'hsl(120, 60%, 45%)' },
      { name: 'Python', icon: '🐍', color: 'hsl(55, 80%, 50%)' },
    ];

    techItems.forEach((tech) => {
      const { unmount } = render(<TechCard {...tech} />);
      expect(screen.getByText(tech.name)).toBeInTheDocument();
      expect(screen.getByText(tech.icon)).toBeInTheDocument();
      unmount();
    });
  });

  it('has correct structure with icon and name', () => {
    const { container } = render(<TechCard {...defaultProps} />);
    const card = container.querySelector('.tech-card');
    expect(card).toBeInTheDocument();
  });
});
