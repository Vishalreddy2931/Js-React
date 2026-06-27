# API Integration with Exception Handling - Task 12

## Project Overview
This React + Vite application demonstrates a complete API integration with comprehensive exception handling. It fetches user data from the JSONPlaceholder API and displays it in a well-formatted, responsive table.

## Features Implemented

### 1. API Integration
- **Endpoint:** `https://jsonplaceholder.typicode.com/users`
- **Method:** GET request with proper headers
- **Data Validation:** Checks for valid response format and non-empty data arrays

### 2. Exception Handling
The application implements robust error handling for multiple scenarios:

#### Error Types Handled:
- **Network Errors (TypeError):** Connection failures, network issues
- **Parsing Errors (SyntaxError):** Invalid JSON responses
- **API Errors:** HTTP status codes (4xx, 5xx)
- **Data Validation Errors:** Invalid data format or empty responses
- **Configuration Errors:** Missing API URL

#### Error States:
- Custom error messages for each scenario
- User-friendly error display with visual indicators
- Console logging for debugging

### 3. Loading State
- Loading spinner with animation
- Loading message displayed during data fetch
- Smooth UX while waiting for API response

### 4. Responsive Table Design
The user table displays all required fields:
- **ID:** User identifier
- **Name:** Full name of the user
- **Username:** User's login name
- **Email:** User's email (clickable mailto links)
- **Phone:** Contact phone number
- **Website:** User's website (clickable links opening in new tab)

### 5. Code Quality & Best Practices
✅ Component-based architecture (UserTable component)
✅ React Hooks (useState, useEffect)
✅ Proper error boundary handling
✅ CSS variables for theming
✅ Responsive design (mobile-friendly)
✅ Accessible HTML (proper semantics, alt texts)
✅ Clean, readable, well-commented code
✅ Separation of concerns (logic vs presentation)

## File Structure

```
src/
├── App.jsx                 # Main component with API integration
├── App.css                 # Application styling
├── components/
│   ├── UserTable.jsx       # Table component
│   └── UserTable.css       # Table styling
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## Component Details

### App.jsx
- Manages state for users, loading, and error
- Implements async API fetch on component mount
- Comprehensive try-catch-finally block
- Passes data to UserTable component

### UserTable.jsx
- Renders loading state with spinner
- Renders error state with user-friendly message
- Renders empty state if no data
- Renders responsive data table with row hover effects
- Makes emails and websites interactive

## How to Run

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5174/`

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

### Preview Production Build
```bash
npm run preview
```

## Styling Features
- **Dark/Light Mode Support:** Uses CSS variables for theme switching
- **Responsive Layout:** Adapts to mobile, tablet, and desktop screens
- **Interactive Elements:** Hover effects on table rows, clickable links
- **Loading Animation:** Animated spinner during data fetch
- **Error Styling:** Clear visual distinction for error states

## API Response Example
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  ...
]
```

## Error Handling Examples

The application handles these scenarios gracefully:

1. **Network Failure:** "Network error: Unable to connect to the server..."
2. **Invalid Response Format:** "Invalid data format received from API"
3. **Empty Data:** "No user data available from the API"
4. **HTTP Errors:** "API Error: 500 Internal Server Error..."
5. **JSON Parse Errors:** "Data parsing error: Invalid JSON response..."

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Optimizations
- Single API call on component mount
- Efficient rendering with React keys
- CSS transitions for smooth animations
- Optimized bundle with Vite

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA labels where applicable

## Future Enhancements
- Add pagination for large datasets
- Implement sorting/filtering capabilities
- Add export to CSV functionality
- Implement caching mechanism
- Add retry logic for failed requests
- Add request timeout handling

---

**API Source:** JSONPlaceholder (https://jsonplaceholder.typicode.com/)
**Framework:** React 19.2.7 with Vite 8.1.0
**Status:** ✅ Complete and Tested
