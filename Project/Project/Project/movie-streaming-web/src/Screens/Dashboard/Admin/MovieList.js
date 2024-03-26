import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import MovieTable from '../../../Components/MovieTable'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllMoviesAction, deleteMovieAction, getAllMoviesAction } from '../../../Redux/Actions/MoviesActions';
import { toast } from 'react-hot-toast';
import { FiLoader } from 'react-icons/fi';
import { Empty } from '../../../Components/Notfications/Empty';
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';


function MovieList() {
  const dispatch = useDispatch()
  const sameClass =
  "text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain"
  //all movies
  const { isLoading, isError, movies, pages , page } = useSelector(
    (state) => state.getAllMovies
  );

  //delete
  const { isLoading: deleteLoading, isError:deleteError } = useSelector(
    (state) => state.deleteMovie
  );

  //delete all
  const { isLoading: allLoading, isError:allError } = useSelector(
    (state) => state.deleteAllMovies
  );


  //delete movie handler
  const deleteMovieHandler = (id) =>{
    window.confirm("Bạn có chắc muốn xoá !?") &&
    dispatch(deleteMovieAction(id));
  }

  //delete all movies handler
  const deleteAllMovieHandler = () =>{
    window.confirm("Bạn có chắc muốn xoá !?") &&
    dispatch(deleteAllMoviesAction());
  }




  //useEffect
  useEffect(()=>{
    dispatch(getAllMoviesAction({}));
      //errors
    if(isError || deleteError || allError){
      toast.error(isError || deleteError || allError);
    }
    
    
  },[dispatch, isError,deleteError, allError]);


 //pagination next and pages
 const nextPage = () =>{
  dispatch(getAllMoviesAction({
    pageNumber: page +1
  }));
};
const prevPage = () =>{
  dispatch(getAllMoviesAction({
    pageNumber: page -1
  }));
};



  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Movie List</h2>
                {
                  movies?.length > 0 && 
                
                <button 
                disabled={allLoading}
                onClick={deleteAllMovieHandler}
                className="bg-subMain font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded flex items-center gap-4" >
                  {
                    allLoading ? "Deleting..." : "Xoá Tất Cả"
                  }
                </button>}
            </div>{
              isLoading || deleteLoading ?(
                <FiLoader />) : movies?.length > 0 ? (
                <>
                  <MovieTable data={movies} admin={true} onDeleteHandler={deleteMovieHandler} />
                  {/* Prev, next */}
                  <div className="w-full flex flex-row justify-center gap-6 my-4">
                  <button onClick={prevPage} disabled={page === 1} 
                    className={sameClass}>
                    <TbPlayerTrackPrev className="text-xl"></TbPlayerTrackPrev>
                  </button>
                  <button onClick={nextPage} disabled={page === pages} 
                    className={sameClass}>
                    <TbPlayerTrackNext className="text-xl"></TbPlayerTrackNext>
                  </button>
        </div>
                </>
                ) : (
                <Empty message="Danh Sách Phim Trống"/>
              
            )}
        </div>
    </SideBar>
  )
}

export default MovieList