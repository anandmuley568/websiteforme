import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';

describe('SkillsSection', () => {
  it('renders the section with correct id', () => {
    render(<SkillsSection />);
    const section = document.getElementById('skills');
    expect(section).toBeInTheDocument();
  });

  it('displays the section header', () => {
    render(<SkillsSection />);
    expect(screen.getByText("// WHAT I WORK WITH")).toBeInTheDocument();
    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
    expect(screen.getByText(/Stack/i)).toBeInTheDocument();
  });

  it('displays the description text', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/Click and hover on the cards/i)).toBeInTheDocument();
  });

  it('displays all tech stack items', () => {
    render(<SkillsSection />);
    const techItems = [
      'React',
      'TypeScript',
      'Node.js',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'AWS',
    ];
    
    techItems.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('displays additional skills text', () => {
    render(<SkillsSection />);
    expect(screen.getByText(/Also experienced with/i)).toBeInTheDocument();
    expect(screen.getByText(/Git, GraphQL, Redis/i)).toBeInTheDocument();
  });

  it('has correct container structure', () => {
    const { container } = render(<SkillsSection />);
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});
