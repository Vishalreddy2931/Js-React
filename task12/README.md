# Js-React - React Tasks

## Task 12: API Integration with Exception Handling

This repository contains the implementation of Task 12, which demonstrates a complete React application with API integration and comprehensive exception handling.

### Features

✅ **API Integration**
- Fetches user data from JSONPlaceholder API
- GET request to: `https://jsonplaceholder.typicode.com/users`
- Displays all 10 users in a responsive table

✅ **Exception Handling**
- Network error handling (TypeError)
- JSON parsing error handling (SyntaxError)
- API HTTP error status codes
- Data validation errors
- User-friendly error messages

✅ **User Interface**
- Beautiful, responsive table design
- Loading spinner during data fetch
- All required fields: ID, Name, Username, Email, Phone, Website
- Interactive email and website links
- Dark/Light mode support
- Mobile-responsive layout

### Getting Started

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5174/`

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Tech Stack

- React 19.2.7
- Vite 8.1.0
- ESLint

### Documentation

See [TASK_IMPLEMENTATION.md](./TASK_IMPLEMENTATION.md) for detailed implementation documentation.
See [GITHUB_SUBMISSION.md](./GITHUB_SUBMISSION.md) for GitHub setup guide.
