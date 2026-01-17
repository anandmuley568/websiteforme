import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import React from 'react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock framer-motion for tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => React.createElement('div', props, children),
    span: ({ children, ...props }: any) => React.createElement('span', props, children),
    p: ({ children, ...props }: any) => React.createElement('p', props, children),
    h2: ({ children, ...props }: any) => React.createElement('h2', props, children),
    h3: ({ children, ...props }: any) => React.createElement('h3', props, children),
    nav: ({ children, ...props }: any) => React.createElement('nav', props, children),
    ul: ({ children, ...props }: any) => React.createElement('ul', props, children),
    li: ({ children, ...props }: any) => React.createElement('li', props, children),
    a: ({ children, ...props }: any) => React.createElement('a', props, children),
    form: ({ children, ...props }: any) => React.createElement('form', props, children),
    input: (props: any) => React.createElement('input', props),
    textarea: (props: any) => React.createElement('textarea', props),
    button: ({ children, ...props }: any) => React.createElement('button', props, children),
  },
  AnimatePresence: ({ children }: any) => children,
  useMotionValue: () => ({ get: () => 0, set: () => {} }),
  useSpring: () => ({ get: () => 0, set: () => {} }),
  useTransform: () => ({ get: () => 0, set: () => {} }),
}));
