# 🎬 Film Project

A web application built with React, Redux Toolkit (RTK Query), TypeScript, and Tailwind CSS that lets users search for movies, view detailed information, filter by genre, and watch trailers. The project uses the TMDB (The Movie Database) API.

---

## ✨ Features

- Search movies by title
- Filter movies by genre
- View detailed movie information (poster, rating, overview, release date)
- Watch official trailers
- Global state management with Redux Toolkit

---

## 🛠 Tech Stack

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- shadcn/ui
- RTK Query
- Vite
- TMDB REST API

---

## 🌍 API

This project uses the TMDB (The Movie Database) API.

Official Website: https://www.themoviedb.org/

You need your own TMDB API key to run the project locally.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/GorYeritsyan/the-movie-app.git
```
### 2. Navigate to the project folder
```bash
cd the-movie-app
```
### 3. Install dependencies
```bash
npm install
```
### 4. Create a .env file in the root directory and add:
```env
VITE_BEAR_TOKEN=
VITE_IMAGE_500_URL=
VITE_IMAGE_ORIGINAL_URL=
VITE_BASE_URL=
```
### 5. Start the development server
```bash
npm run dev
```

---

## 📂 Project Structure
```bash
src/
 ├── api/              # RTK Query configuration and endpoints
 ├── components/       # Reusable components
 ├── hooks/            # Custom React hooks
 ├── lib/              # Utility functions and helpers
 ├── pages/            # Application pages
 ├── store/            # Redux store and slices
 ├── types/            # TypeScript types
 └── main.tsx
```

---

## 🚀 Live Demo

https://the-movies-ecru.vercel.app/

---
