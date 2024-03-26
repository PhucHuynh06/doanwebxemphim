import * as moviesConstants from "../Constants/MoviesConstants.js";
import * as moviesAPIs from "../APIs/MoviesServices.js";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection, /*tokenProtection*/ } from "../protection.js";
import { reviewMovieService } from "../APIs/MoviesServices";
import { CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAIL, CREATE_REVIEW_RESET } from "../Constants/MoviesConstants";

//Get all movies action
export const getAllMoviesAction = ({
    category="",
    time="",
    language="",
    rate="",
    year="",
    search="",
    pageNumber="",
}) => async(dispatch) =>{
    try{
        dispatch({type:moviesConstants.MOVIES_LIST_REQUEST})
        const response = await moviesAPIs.getAllMoviesService(
            category, time, language, rate, year, search, pageNumber,
        )
        dispatch({type:moviesConstants.MOVIES_LIST_SUCCESS, 
                payload: response,});
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
    }
};

//get random movies action
export const getRandomMoviesAction = () => async (dispatch) =>{
    try{
        dispatch({ type: moviesConstants.MOVIES_RANDOM_REQUEST});
        const response = await moviesAPIs.getRandommoviesService();
        dispatch({
            type: moviesConstants.MOVIES_RANDOM_SUCCESS,
            payload: response,
        });
    } catch(error){
        ErrorsAction(error, dispatch, moviesConstants.MOVIES_RANDOM_FAIL);
    }
};

//get movie by id action
export const getMovieByIdAction = (id) => async (dispatch) =>{
    try{
        dispatch({ type: moviesConstants.MOVIES_DETAILS_REQUEST});
        const response = await moviesAPIs.getMovieByIdService(id);
        dispatch({ type: moviesConstants.MOVIES_DETAILS_SUCCESS,
                    payload: response,});
    }catch (error){
        ErrorsAction( error, dispatch, moviesConstants.MOVIES_DETAILS_FAIL);
    }
};

//get top rated movie action
export const getTopRatedMovieAction = () => async (dispatch) => {
    try {
      dispatch({ type: moviesConstants.MOVIE_TOP_RATED_REQUEST });
      const response = await moviesAPIs.getTopRatedMovieService();
      dispatch({
        type: moviesConstants.MOVIE_TOP_RATED_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      ErrorsAction(error, dispatch, moviesConstants.MOVIE_TOP_RATED_FAIL);
    }
  };

// review movie action
/*export const reviewMovieAction =({id, reivew}) => async (dispatch,getState) =>{
    try{
        dispatch({ type: moviesConstants.CREATE_REVIEW_REQUEST});
        const response = await moviesAPIs.reviewMovieService(
            tokenProtection(getState),
            id,
            reivew
        );
        dispatch({
            type: moviesConstants.CREATE_REVIEW_SUCCESS,
            payload: response,
        });
        toast.success("Bình luận đã được thêm !");
        dispatch({ type: moviesConstants.CREATE_REVIEW_RESET});
        dispatch(getMovieByIdAction(id));
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.CREATE_REVIEW_FAIL);
    }
};*/

export const reviewMovieAction = ({ id, review }) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_REVIEW_REQUEST });
  
      const token = getState().userLogin.userInfo.token;
      const response = await reviewMovieService(token, id, review);
  
      dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: response,
      });
  
      toast.success("Bình luận đã được thêm !");
      dispatch({ type: CREATE_REVIEW_RESET });
      dispatch(getMovieByIdAction(id));
    } catch (error) {
      dispatch({ type: CREATE_REVIEW_FAIL, payload: error.message });
    }
  };

  //delete movie action
  export const deleteMovieAction = (id) => async (dispatch, getState) =>{
    try{
        dispatch({ type: moviesConstants.DELETE_MOVIE_REQUEST});
        const response = await moviesAPIs.deleteMovieService(
            tokenProtection(getState),
            id
        );
        dispatch({
            type:moviesConstants.DELETE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Đã xoá phim thành công !");
        dispatch(getAllMoviesAction());
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.DELETE_MOVIE_FAIL);
    }
  };

  //delete all movies action
  export const deleteAllMoviesAction = () => async (dispatch, getState) =>{
    try{
        dispatch({ type:moviesConstants.DELETE_ALL_MOVIE_REQUEST });
        const response = await moviesAPIs.deleteAllMoviesService(
            tokenProtection(getState)
        );
        dispatch({
            type: moviesConstants.DELETE_ALL_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Đã xoá tất cả phim thành công !");
        dispatch(getAllMoviesAction({}));
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.DELETE_ALL_MOVIE_FAIL);
    }
  };

  //create movie action
  export const createMovieAction = (movie) => async (dispatch, getState) =>{
    try{
        dispatch({ type: moviesConstants.CREATE_MOVIE_REQUEST});
        const response = await moviesAPIs.createMovieService(
            tokenProtection(getState),
            movie
        );
        dispatch({
            type: moviesConstants.CREATE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Phim đã được tạo thành công !");
        dispatch(getAllMoviesAction());
    }catch(error){
        ErrorsAction(error, dispatch, moviesConstants.CREATE_MOVIE_FAIL);
    }
  };

  /* CASTS */

  //add cast
  export const addCastAction = (cast) => async (dispatch, getState) =>{
    dispatch({ type: moviesConstants.ADD_CAST, payload: cast});
    localStorage.setItem("cast", JSON.stringify(getState().casts.casts));
  };

  //remove cast
  export const removeCastAction = (id) => async (dispatch, getState) =>{
    dispatch({ type: moviesConstants.DELETE_CAST, payload: id});
    localStorage.setItem("casts", JSON.stringify(getState().casts.casts));
  };

  //update cast
  export const updateCastAction = (cast) => async (dispatch, getState) =>{
    dispatch ({ type: moviesConstants.EDIT_CAST, payload: cast});
    localStorage.setItem("casts", JSON.stringify(getState().cast.cast));
  };

  //delete all cast
  export const deleteAllCastAction = (id) => async (dispatch) =>{
    dispatch ({ type: moviesConstants.RESET_CATS});
    localStorage.removeItem("casts");
  };

  //Update movie action
  export const updateMovieAction = (id, movie) => async (dispatch, getState) =>{
    try{
      dispatch({ type: moviesConstants.UPDATE_MOVIE_REQUEST});
      const response = await moviesAPIs.updateMovieService(
        tokenProtection(getState),
        id,
        movie
      );
      dispatch({
        type: moviesConstants.UPDATE_MOVIE_SUCCESS,
        payload: response,
      });
      toast.success("Cập nhật phim thành công !");
      dispatch(getMovieByIdAction(id));
      dispatch(deleteAllCastAction());
    }catch(error){
      ErrorsAction(error, dispatch, moviesConstants.CREATE_MOVIE_FAIL);
    }
  };