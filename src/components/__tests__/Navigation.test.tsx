import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  it('renders the navigation element', () => {
    render(<Navigation />);
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(<Navigation />);
    expect(screen.getByText('<Dev />')).toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<Navigation />);
    const navItems = ['About', 'Skills', 'Projects', 'Contact', 'Study'];
    
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('navigation links have correct href attributes', () => {
    render(<Navigation />);
    const aboutLink = screen.getByText('About').closest('a');
    const skillsLink = screen.getByText('Skills').closest('a');
    const projectsLink = screen.getByText('Projects').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    const studyLink = screen.getByText('Study').closest('a');
    
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(skillsLink).toHaveAttribute('href', '#skills');
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
    expect(studyLink).toHaveAttribute('href', '#study');
  });

  it('displays the Hire Me button', () => {
    render(<Navigation />);
    const hireMeButton = screen.getByText('Hire Me');
    expect(hireMeButton).toBeInTheDocument();
    expect(hireMeButton.closest('a')).toHaveAttribute('href', '#contact');
  });

  it('has correct container structure', () => {
    const { container } = render(<Navigation />);
    expect(container.querySelector('.container')).toBeInTheDocument();
  });

  it('logo link exists', () => {
    render(<Navigation />);
    const logo = screen.getByText('<Dev />').closest('a');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '#');
  });
});
