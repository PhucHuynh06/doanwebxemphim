import React, { useEffect, useState } from 'react';
import Title from '../Title';
import { BsCollectionFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import Movie from '../Movie';
import Loader from "../Notfications/Loader";
import { Empty } from "../Notfications/Empty";
import { likeMovieAction, getFavoriteMoviesAction } from '../../Redux/Actions/userActions';
import toast from "react-hot-toast";

function TrendingMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const { movies } = useSelector((state) => state.getAllMovies);
  const { likedMovies } = useSelector((state) => state.userLikeMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    // Giả lập thời gian tải dữ liệu
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleLikeMovie = (movieId) => {
    dispatch(likeMovieAction(movieId));
    toast.promise(
      dispatch(getFavoriteMoviesAction()),
      {
        loading: 'Loading...',
        success: 'Danh sách yêu thích đã được cập nhật',
        error: 'Failed to update favorite movies'
      }
    );
  };

  const newMovies = movies?.filter((movie) => !likedMovies?.includes(movie._id));

  return (
    <div className='my-16'>
      <Title title="Trending Movies" Icon={BsCollectionFill} />
      {isLoading ? (
        <Loader />
      ) : newMovies && newMovies.length > 0 ? (
        <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {newMovies.map((movie, index) => (
            <Movie key={index} movie={movie} onLikeMovie={handleLikeMovie} />
          ))}
        </div>
      ) : (
        <div className='mt-6'>
          <Empty message="Hiện tại danh sách đang trống !" />
        </div>
      )}
    </div>
  );
}

export default TrendingMovies;
