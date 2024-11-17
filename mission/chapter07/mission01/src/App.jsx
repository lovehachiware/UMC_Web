import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchPage from "./components/search/search";
import MoviesPage from "./pages/MovPage";
import LoginPage from "./components/login/login";
import SignupPage from "./components/signup/signup";
import RootLayout from "./layout/root-layout";
import Home from "./pages/home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/DetailPage/MovieDetail";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "moviespage", element: <MoviesPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      {
        path: "movies",
        children: [
          { path: "now-playing", element: <NowPlaying /> },
          { path: "popular", element: <Popular /> },
          { path: "top-rated", element: <TopRated /> },
          { path: "upcoming", element: <Upcoming /> },
          { path: ":movieId", element: <MovieDetail /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
