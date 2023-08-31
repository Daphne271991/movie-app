import React from "react";
import { useSelector } from "react-redux";
import { isLoading } from "../../features/movies/movieSlice";

const Loader = () => {
  const loading = useSelector(isLoading);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return null;
};

export default Loader;
