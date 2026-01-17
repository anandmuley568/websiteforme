# Test Setup

This project uses **Vitest** and **React Testing Library** for testing React components.

## Test Files Created

The following test files have been added:

1. `src/components/__tests__/AboutSection.test.tsx` - Tests for AboutSection component
2. `src/components/__tests__/HeroSection.test.tsx` - Tests for HeroSection component
3. `src/components/__tests__/ContactSection.test.tsx` - Tests for ContactSection component (includes form interaction tests)
4. `src/components/__tests__/Navigation.test.tsx` - Tests for Navigation component
5. `src/components/__tests__/ProjectsSection.test.tsx` - Tests for ProjectsSection component
6. `src/components/__tests__/SkillsSection.test.tsx` - Tests for SkillsSection component
7. `src/components/__tests__/TechCard.test.tsx` - Tests for TechCard component

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests once (CI mode):
```bash
npm run test:run
```

### Run tests with UI:
```bash
npm run test:ui
```

### Run tests with coverage:
```bash
npm run test:coverage
```

## Test Configuration

- **Test Framework**: Vitest
- **Testing Library**: React Testing Library
- **Environment**: jsdom (for DOM simulation)
- **Setup File**: `src/test/setup.ts` (includes framer-motion mocks)

## Test Coverage

The tests cover:
- Component rendering
- Text content verification
- Link/button functionality
- Form interactions (for ContactSection)
- Navigation structure
- Component props and data display

## Notes

- Framer Motion animations are mocked in the test setup to simplify testing
- Tests use React Testing Library's best practices for querying elements
- All tests are located in `src/components/__tests__/` directory
