# Flixverse — Movie Showcase Web App

**Flixverse** is a movie discovery web application that allows users to explore popular movies, discover new content, and view detailed information about each movie. Built with modern web technologies, this project demonstrates the ability to integrate public APIs, adapt to pre-coded systems, and create a seamless user experience.

---

## Features

- **API Integration**: Fetches movie data from **The Movie Database (TMDB) API**, providing real-time information on trending, popular, and top-rated movies.
- **Responsive Design**: Fully responsive layout built with **Tailwind CSS**, ensuring smooth interactions across desktop and mobile devices.
- **Skeleton Loaders**: Implemented **skeleton loaders** for smoother user experience while fetching movie data, minimizing page load time perception.
- **Lazy Loading**: Uses lazy loading for images and components, improving initial page load times.
- **Movie Cards**: Displays movie posters with essential information like title, release year, rating, and genres. Poster images are fetched dynamically from TMDB’s image server.

---

## Technical Stack

- **Frontend**: React, Tailwind CSS, React Hooks
- **API**: TMDB API (The Movie Database)
- **State Management**: React’s `useState` and `useEffect` for handling API calls and managing the UI state.
- **Routing**: React Router for navigation between pages (home, movie details, etc.)

---

## What I Learned

- **API Integration**: Successfully adapted to the structure and methods of a public API, fetching movie data in various formats and handling errors.
- **UI/UX Optimization**: Focused on creating an intuitive and responsive user interface that makes it easy for users to browse through movies, ensuring accessibility on all devices.
- **Skeleton Loaders and Performance**: Implemented **skeleton loaders** to keep users engaged while data loads, contributing to a smooth user experience even during network delays.
- **Adaptability**: Showcased my ability to work with existing codebases and integrate third-party systems (like the TMDB API) into a cohesive and functional project.

---

## Challenges Overcome

- Integrating TMDB's API and dynamically handling data based on different types of movie categories (popular, trending, top-rated, etc.).
- Ensuring optimal performance by implementing lazy loading for images and data, and using skeleton loaders to reduce the perception of load times.

---

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flixverse.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`.

---

## Acknowledgments

- **TMDB API**: For providing the movie data and images.
- **React**: For building a performant, component-based UI.
- **React Router**: For seamless navigation across the application.
