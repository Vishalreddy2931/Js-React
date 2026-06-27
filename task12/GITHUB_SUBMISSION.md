# GitHub Setup & Submission Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git installed

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd taskvk12
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5174/`

### 4. Build for Production
```bash
npm run build
```
Output will be in the `dist/` directory.

### 5. Lint Code
```bash
npm run lint
```

## Project Structure

```
taskvk12/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── UserTable.jsx     # Table component for displaying users
│   │   └── UserTable.css     # Table styling
│   ├── App.jsx               # Main app component with API integration
│   ├── App.css               # App styling
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── TASK_IMPLEMENTATION.md    # Detailed implementation documentation
└── README.md                 # Original project README
```

## Key Features

✅ **API Integration**
- Fetches user data from JSONPlaceholder API
- GET request to: `https://jsonplaceholder.typicode.com/users`

✅ **Exception Handling**
- Network error handling (TypeError)
- JSON parsing error handling (SyntaxError)
- API error status codes handling
- Data validation and format checking
- Console error logging for debugging

✅ **User Interface**
- Beautiful, responsive table design
- Loading spinner during data fetch
- Error state with user-friendly messages
- Dark/Light mode support
- Mobile-responsive layout

✅ **Displayed Data**
- ID, Name, Username, Email, Phone, Website
- Clickable email links (mailto)
- Clickable website links (opens in new tab)

✅ **Code Quality**
- Clean, readable code structure
- Proper React best practices
- Component-based architecture
- CSS variables for theming
- Responsive design (mobile-first)
- Semantic HTML
- Accessible components

## Testing the Application

1. **Normal Flow:** The app will load and display a spinner while fetching data, then display all 10 users in a table
2. **Error Handling:** Try disconnecting internet to see network error handling
3. **Responsive Design:** Resize browser to see mobile layout
4. **Interactive Elements:** Click email links and website links to verify they work

## GitHub Submission Steps

### 1. Create GitHub Repository
- Go to https://github.com/new
- Create a new repository named `api-integration-task-12` (or similar)
- Choose public visibility (for sharing the link)

### 2. Push Code to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Task 12: API Integration with Exception Handling

- Implemented API integration with JSONPlaceholder API
- Added comprehensive exception handling for multiple error scenarios
- Created responsive user data table with 6 required fields
- Implemented loading and error states with user-friendly UI
- Followed React best practices and clean code principles"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/api-integration-task-12.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Share Repository Link
Copy the repository URL and send via email:
- Format: `https://github.com/YOUR_USERNAME/api-integration-task-12`

## Troubleshooting

### Port Already in Use
If port 5174 is already in use:
```bash
npm run dev -- --port 5175
```

### Dependencies Issue
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
npm run lint  # Check for linting issues
npm run build  # Test production build
```

## Performance Notes
- Initial load time includes API call (typically < 2 seconds)
- Table renders with React keys for efficient updates
- Vite provides fast HMR (Hot Module Replacement) for development
- Production build is optimized and minified

## Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Additional Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Contact & Support

For questions about the implementation, refer to:
- [TASK_IMPLEMENTATION.md](./TASK_IMPLEMENTATION.md) - Detailed feature documentation
- [README.md](./README.md) - Original project README
- Component files in `src/components/` - Code documentation and comments

---

**Task:** API Integration with Exception Handling  
**Status:** ✅ Complete  
**Date Submitted:** 2026-06-26
