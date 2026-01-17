import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from '../ContactSection';

describe('ContactSection', () => {
  it('renders the section with correct id', () => {
    render(<ContactSection />);
    const section = document.getElementById('contact');
    expect(section).toBeInTheDocument();
  });

  it('displays the section header', () => {
    render(<ContactSection />);
    expect(screen.getByText("// LET'S CONNECT")).toBeInTheDocument();
    expect(screen.getByText(/Get In/i)).toBeInTheDocument();
    expect(screen.getByText(/Touch/i)).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('allows user to type in name field', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement;
    
    await user.type(nameInput, 'John Doe');
    expect(nameInput.value).toBe('John Doe');
  });

  it('allows user to type in email field', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
    
    await user.type(emailInput, 'john@example.com');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('allows user to type in message field', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement;
    
    await user.type(messageInput, 'Hello, this is a test message');
    expect(messageInput.value).toBe('Hello, this is a test message');
  });

  it('handles form submission', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const user = userEvent.setup();
    render(<ContactSection />);
    
    const nameInput = screen.getByLabelText(/Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitButton = screen.getByText('Send Message');
    
    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'Test message');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
      });
    });
    
    consoleSpy.mockRestore();
  });

  it('displays all social media links', () => {
    render(<ContactSection />);
    expect(screen.getByText('Or find me on social media')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('has correct email link', () => {
    render(<ContactSection />);
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@example.com');
  });
});
