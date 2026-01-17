import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

describe('ProjectsSection', () => {
  it('renders the section with correct id', () => {
    render(<ProjectsSection />);
    const section = document.getElementById('projects');
    expect(section).toBeInTheDocument();
  });

  it('displays the section header', () => {
    render(<ProjectsSection />);
    expect(screen.getByText("// MY WORK")).toBeInTheDocument();
    expect(screen.getByText(/Featured/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it('displays all three projects', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('AI Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Social Media App')).toBeInTheDocument();
  });

  it('displays project descriptions', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/Full-stack e-commerce solution/i)).toBeInTheDocument();
    expect(screen.getByText(/Real-time analytics dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile-first social platform/i)).toBeInTheDocument();
  });

  it('displays project tags', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('TensorFlow')).toBeInTheDocument();
    expect(screen.getByText('React Native')).toBeInTheDocument();
    expect(screen.getByText('Firebase')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
  });

  it('renders View Project buttons for each project', () => {
    render(<ProjectsSection />);
    const viewProjectButtons = screen.getAllByText('View Project');
    expect(viewProjectButtons).toHaveLength(3);
  });

  it('has correct container structure', () => {
    const { container } = render(<ProjectsSection />);
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});
