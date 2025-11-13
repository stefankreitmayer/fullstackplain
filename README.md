# Fullstack Plain - Monorepo Template

A full-stack monorepo template project, built with npm workspaces.

## Structure

- `frontend/` - React frontend with Vite, TypeScript, Tailwind CSS, and React Query
- `backend/` - Node.js backend with Express and TypeScript
- `shared/` - Shared TypeScript package for types and constants

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

This will install dependencies for all workspaces.

### Development

Start all packages (shared, backend, and frontend) concurrently:

```bash
npm run dev
```

This will:
1. Build the shared package first
2. Start all packages in watch mode

Or start them individually:

```bash
# Shared package (builds and watches for changes)
npm run dev --workspace=shared

# Backend only
npm run dev --workspace=backend

# Frontend only
npm run dev --workspace=frontend
```

### Environment Variables

#### Frontend

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:3001
```

#### Backend

Create `backend/.env`:

```env
PORT=3001
```

### Building

Build all packages:

```bash
npm run build
```

Build individual packages:

```bash
npm run build --workspace=shared
npm run build --workspace=backend
npm run build --workspace=frontend
```

## Workspace Packages

- `@fullstackplain/shared` - Shared types and constants
- `@fullstackplain/backend` - Express API server
- `@fullstackplain/frontend` - React application

## Project Structure

The project uses a feature-based folder structure:

### Backend Structure
```
backend/src/
├── features/
│   └── greet/
│       ├── __tests__/
│       │   └── greet.service.test.ts  # Unit tests
│       ├── greet.controller.ts        # HTTP request/response handling
│       ├── greet.service.ts           # Business logic
│       └── greet.routes.ts            # Route definitions
├── __tests__/
│   └── index.test.ts                  # Integration tests
├── app.ts                              # Express app factory
└── index.ts                            # Server entry point
```

### Frontend Structure
```
frontend/src/
├── api/
│   ├── __tests__/
│   │   └── api.test.ts             # API helper tests
│   └── api.ts                      # Global API helper functions
├── features/
│   └── greet/
│       ├── __tests__/
│       │   └── GreetPage.test.tsx  # Unit tests
│       └── GreetPage.tsx           # Feature page component
├── __tests__/
│   ├── integration/                # Integration tests
│   └── e2e/                        # E2E tests
├── App.tsx                         # Main app with routing
└── main.tsx                        # Entry point
```

## Testing

### Frontend Tests

The frontend uses a structured test organization:

- **Unit Tests**: Located within each feature folder at `src/features/{feature}/__tests__/`
  - Test individual components and functions in isolation
  - Example: `src/features/greet/__tests__/GreetPage.test.tsx`

- **Integration Tests**: Located at `src/__tests__/integration/`
  - Test multiple features/components working together
  - Example: `src/__tests__/integration/example.integration.test.tsx`

- **E2E Tests**: Located at `src/__tests__/e2e/`
  - Test complete user flows across the entire application
  - Example: `src/__tests__/e2e/example.e2e.test.tsx`

Run tests:

```bash
# Run all tests
npm run test --workspace=frontend

# Run tests in watch mode
npm run test:watch --workspace=frontend

# Run tests with coverage
npm run test:coverage --workspace=frontend
```

### Backend Tests

The backend uses a structured test organization:

- **Unit Tests**: Located within each feature folder at `src/features/{feature}/__tests__/`
  - Test individual services and functions in isolation
  - Example: `src/features/greet/__tests__/greet.service.test.ts`

- **Integration Tests**: Located at `src/__tests__/`
  - Test API routes and full request/response flow
  - Example: `src/__tests__/index.test.ts`

Run tests:

```bash
# Run all tests
npm run test --workspace=backend

# Run tests in watch mode
npm run test:watch --workspace=backend

# Run tests with coverage
npm run test:coverage --workspace=backend
```

## API Endpoints

```
GET /api/v1/greet
  → Returns: { greeting: "Hello." }
  → Description: Returns a greeting message

GET /health
  → Returns: { status: "ok" }
  → Description: Health check endpoint
```

## Technology Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Data Fetching**: React Query (TanStack Query)
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Language**: TypeScript

### Backend
- **Framework**: Express.js
- **Runtime**: Node.js
- **Testing**: Jest + Supertest
- **Language**: TypeScript

### Shared
- **Type Definitions**: TypeScript interfaces
- **Exports**: GreetingResponse type, API_VERSION

### Development Tools
- **Package Manager**: npm workspaces
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Type Checking**: TypeScript

## Code Quality

The project includes pre-commit hooks that run:
1. Lint-staged (formatting and linting)
2. Build shared package
3. Run all tests

Make sure all tests pass and code is properly formatted before committing.
