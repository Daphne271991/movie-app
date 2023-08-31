import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../Loader/Loader"; // Import the Loader component
import "./MovieListing.scss";
import { Settings } from "../../common/settings";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const isLoadingMovies =
    movies.Response === "True" && movies.Search.length === 0;
  const isLoadingShows = shows.Response === "True" && shows.Search.length === 0;

  const renderMovies = isLoadingMovies ? (
    <Loader />
  ) : movies.Response === "True" ? (
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  const renderShows = isLoadingShows ? (
    <Loader />
  ) : shows.Response === "True" ? (
    shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
