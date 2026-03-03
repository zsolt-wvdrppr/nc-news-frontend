import {
  ChevronsLeftRightEllipsis,
  Key,
  Lamp,
  LampDesk,
  Server,
} from "lucide-react";
import { Link } from "react-router";

export function About({}) {
  return (
    <article className="max-w-400 px-3 flex flex-col gap-5 pb-8 text-c-jetblack bg-linear-to-b from-transparent to-c-lightcyan/30">
      <header>
        <h1 className="text-c-duskblue font-semibold">
          NC News - Full-Stack News Aggregation Platform
        </h1>
      </header>

      <section className="p-3">
        <p>
          NC News is a Reddit-style news aggregation and social discussion
          platform built as a portfolio project during the Northcoders Software
          Development Bootcamp. The application demonstrates full-stack
          JavaScript development with a complete separation between frontend and
          backend.
        </p>
      </section>

      <section className="p-3">
        <header className="mb-3 flex flex-row items-center gap-3">
          <Server className="mt-1 size-6 stroke-c-burntpeach" />
          <h2>Backend</h2>
        </header>
        <ul>
          <li>
            <strong>Stack:</strong> Express.js REST API with PostgreSQL database
          </li>
          <li>
            <strong>Hosted:</strong> Server on Render.com, Database on Supabase
          </li>
          <li>
            <strong>Testing:</strong> Comprehensive Jest test suite with TDD
            approach
          </li>
          <li>
            <strong>Architecture:</strong> MVC pattern with organised routes,
            controllers, services, and models
          </li>
          <li>
            <strong>API Documentation:</strong> Live at{" "}
            <Link target="_blank" to="https://zsolts-news.onrender.com/api/">
              https://zsolts-news.onrender.com/api/
            </Link>
          </li>
          <li>
            <strong>Repository:</strong>{" "}
            <Link target="_blank" to="https://github.com/zsolt-wvdrppr/nc-news">
              https://github.com/zsolt-wvdrppr/nc-news
            </Link>
          </li>
        </ul>
      </section>

      <section className="p-3">
        <header className="mb-3 flex flex-row items-center gap-3">
          <ChevronsLeftRightEllipsis className="mt-1 size-6 stroke-c-burntpeach" />
          <h2>Frontend (This Repository)</h2>
        </header>
        <ul className="">
          <li>
            <strong>Stack:</strong> TypeScript, React 19, React Router 7,
            Tailwind CSS v4
          </li>
          <li>
            <strong>Build Tool:</strong> Vite with modern dev tooling
          </li>
          <li>
            <strong>Icons:</strong> Lucide React for UI elements
          </li>
          <li>
            <strong>Features:</strong>
            <ul>
              <li>Browse and filter articles by topics</li>
              <li>Sort articles by various criteria (date, votes, comments)</li>
              <li>View single articles with full content and images</li>
              <li>Read and post comments on articles</li>
              <li>Upvote/downvote articles and comments</li>
              <li>Delete own comments</li>
              <li>User authentication (login/signup pages)</li>
              <li>Responsive grid layout for article cards</li>
              <li>Infinite scroll capability</li>
              <li>Custom error handling with user-friendly messages</li>
              <li>Optimistic UI updates for voting</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="p-3">
        <header className="mb-3 flex flex-row items-center gap-3">
          <Key className="mt-1 size-6 stroke-c-burntpeach" />
          <h2>Key Functionality</h2>
        </header>
        <p className="">
          The application provides a complete news platform experience where
          users can discover content through topic-based filtering, engage with
          articles through commenting and voting, and manage their own
          contributions. The frontend communicates with the RESTful backend API
          to fetch articles, topics, comments, and user data, whilst handling
          all CRUD operations for content management.
        </p>
      </section>

      <section className="p-3">
        <header className="mb-3 flex flex-row items-center gap-3">
          <LampDesk className="mt-1 size-6 stroke-c-burntpeach" />
          <h2>Technical Highlights</h2>
        </header>
        <ul className="flex flex-col gap-2">
          <li>
            Custom React hooks for content fetching, filtering, user management,
            and scroll behaviour
          </li>
          <li>
            Context API for global state management (user authentication, error
            handling)
          </li>
          <li>
            Type-safe development with TypeScript interfaces for all API
            responses
          </li>
          <li>
            Tailwind CSS v4 with custom colour palette and responsive design
            utilities
          </li>
          <li>
            Comprehensive error handling with custom error classes and
            user-friendly messages
          </li>
        </ul>
      </section>

      <footer>
        <p>
          <strong>Note:</strong> The backend API is hosted on a free tier, so
          initial requests may take up to 50 seconds due to cold starts.
        </p>
        <nav>
          <ul>
            <li>
              <strong>Live API:</strong>{" "}
              <Link target="_blank" to="https://zsolts-news.onrender.com/api/">
                https://zsolts-news.onrender.com/api/
              </Link>
            </li>
            <li>
              <strong>Backend Repository:</strong>{" "}
              <Link
                target="_blank"
                to="https://github.com/zsolt-wvdrppr/nc-news"
              >
                https://github.com/zsolt-wvdrppr/nc-news
              </Link>
            </li>
            <li>
              <strong>GitHub Profile:</strong>{" "}
              <Link target="_blank" to="https://github.com/zsolt-wvdrppr">
                https://github.com/zsolt-wvdrppr
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </article>
  );
}

export default About;
