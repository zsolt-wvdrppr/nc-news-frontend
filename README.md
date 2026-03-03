# NC News Frontend

A modern, responsive news aggregation and social discussion platform built with React and TypeScript. This project serves as the frontend interface for the NC News API, created as a portfolio piece during the Northcoders Software Development Bootcamp.

**Live Demo:** [Add your deployed link here]  
**Backend Repository:** [NC News API](https://github.com/zsolt-wvdrppr/nc-news)  
**API Documentation:** [https://zsolts-news.onrender.com/api/](https://zsolts-news.onrender.com/api/)

---

## 📋 Project Overview

NC News is a Reddit-style platform where users can browse articles, read and post comments, and vote on content. The application demonstrates modern React development practices with TypeScript, custom hooks, context management, and responsive design.

**Note:** This is a demonstration project. User authentication is simplified (username-only, no passwords) to showcase frontend functionality whilst the focus remains on React architecture, API integration, and user experience design.

---

## ✨ Key Features

- **Article Browsing:** View articles in a responsive grid layout with infinite scroll capability
- **Topic Filtering:** Filter articles by topic categories
- **Sorting & Ordering:** Sort articles by date, votes, or comment count in ascending/descending order
- **Article Interactions:** Read full articles with images and vote on content
- **Comments System:** View, post, and delete comments with voting functionality
- **User Profiles:** Simple username-based user system for content attribution
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Error Handling:** User-friendly error messages with custom error boundaries
- **Optimistic Updates:** Immediate UI feedback for voting actions

---

## 🛠️ Technologies Used

### Core

- **React 19** - UI library
- **TypeScript** - Type-safe development
- **React Router 7** - Client-side routing
- **Vite** - Build tool and dev server

### Styling & UI

- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library

### Development Tools

- **ESLint** - Code linting with TypeScript rules
- **TypeScript ESLint** - TypeScript-specific linting

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zsolt-wvdrppr/nc-news-frontend.git
   cd nc-news-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── article/      # Article list, single article, filters
│   │   ├── comment/      # Comments section, form, delete button
│   │   └── user/         # Login, signup, user display
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Nav.tsx
├── lib/
│   ├── api.ts           # API fetch functions
│   ├── types.ts         # TypeScript interfaces
│   ├── utils.ts         # Helper functions
│   ├── errors.ts        # Custom error classes
│   ├── contexts/        # React Context providers
│   └── hooks/           # Custom React hooks
├── App.tsx
└── main.tsx
```

---

## 🎯 Custom Hooks

The application uses several custom hooks to manage state and side effects:

- `useContent` - Fetch and manage API content
- `useUser` - Handle user authentication and validation
- `useFilterSelector` - Manage article filtering logic
- `useTopicSelector` - Handle topic-based navigation
- `useScrollToTop` - Reset scroll position on route changes
- `useRedirect404` - Handle 404 errors with redirects
- `useDeleteContent` - Manage content deletion
- `usePushComment` - Handle comment posting

---

## 🔌 API Integration

This frontend interfaces with the NC News REST API, which provides:

- Articles with sorting, filtering, and pagination
- Comments with nested relationships
- Topics for content categorisation
- User data for content attribution
- Voting system for articles and comments

**Backend Tech Stack:** Express.js, PostgreSQL, Jest  
**Hosted on:** Render.com (server) + Supabase (database)

⚠️ **Note:** The API is hosted on a free tier and may take up to 50 seconds to respond on the first request due to cold starts.

---

## 🎨 Design Decisions

### User Authentication

This project implements a simplified authentication system using username-only validation. This design choice was made to:

- Focus development effort on React patterns and API integration
- Demonstrate frontend state management without backend auth complexity
- Maintain project scope appropriate for a bootcamp portfolio piece

In a production environment, this would be replaced with secure authentication (JWT, OAuth, etc.).

### State Management

The application uses React Context API for global state (user, errors) and custom hooks for local state management, avoiding the complexity of Redux whilst maintaining clean, testable code.

### Type Safety

All API responses are typed with TypeScript interfaces, providing compile-time safety and improved developer experience.

---

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🚧 Future Enhancements

- Implement proper authentication with JWT tokens
- Add article creation functionality
- Include user profiles with posting history
- Implement real-time updates with WebSockets
- Add image upload capability
- Enhance accessibility with ARIA labels
- Add unit and integration tests

---

## 👤 About the Author

**Zsolt** - Junior Developer transitioning from digital marketing and technical operations, focused on solving practical problems with clean, reliable code.

Experienced in building full-stack applications with the JavaScript ecosystem, including REST APIs with Node.js/Express, PostgreSQL databases, and React frontends. Comfortable with TDD, MVC architecture, and modern development workflows.

**GitHub:** [@zsolt-wvdrppr](https://github.com/zsolt-wvdrppr)

---

## 📝 Licence

This project was created as part of the Northcoders Software Development Bootcamp and is intended for educational and portfolio purposes.

---

## 🙏 Acknowledgements

- [Northcoders](https://northcoders.com/) for the excellent bootcamp programme
- The project uses the [NC News API](https://github.com/zsolt-wvdrppr/nc-news) which I also developed
- Icon set by [Lucide Icons](https://lucide.dev/)
