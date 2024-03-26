import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import MovieTable from '../../../Components/MovieTable'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsersAction } from '../../../Redux/Actions/userActions'
import { toast } from 'react-hot-toast'
import { FiLoader } from 'react-icons/fi'
import { Empty } from '../../../Components/Notfications/Empty'
import { deleteMovieAction } from '../../../Redux/Actions/MoviesActions'

function Dashboard() {
    const  dispatch = useDispatch();
  const { isLoading:catLoading, isError:catError, categories, } = useSelector(
    (state) => state.categoryGetAll
);
const { isLoading:userLoading, isError:userError, users} = useSelector(
  (state) => state.adminGetAllUsers
);
const { isLoading, isError, movies, totalMovies } = useSelector(
  (state) => state.getAllMovies
);

//delete
const { isLoading: deleteLoading, isError:deleteError } = useSelector(
  (state) => state.deleteMovie
);

//delete movie handler
const deleteMovieHandler = (id) =>{
  window.confirm("Bạn có chắc muốn xoá !?") &&
  dispatch(deleteMovieAction(id));
}



//useEffect
useEffect(() =>{
  dispatch(getAllUsersAction());
  if(isError || catError|| userError || deleteError ){
    toast.error("Có lỗi xảy ra !");
  }
}, [dispatch, isError, catError, userError, deleteError]);



    //Dashboard datas
    const DashboardInfo = [
        {
            bg:'bg-orange-600',
            icon:FaRegListAlt,
            title:'Total Movies',
            total: isLoading ? "Loading..." : totalMovies,
        },
        {
            bg:'bg-blue-700',
            icon:HiViewGridAdd,
            title:'Total Categories',
            total: catLoading ? "Loading..." : categories?.length || 0,
        },
        {
            bg:'bg-green-600',
            icon:FaUser,
            title:'Total Users',
            total: userLoading ? "Loading..." : users?.length || 0,
        },
    ]
  return (
    <SideBar>
        <h2 className='text-xl font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardInfo.map((data, index) => (
                <div 
                    key={index}
                    className='p-4 rounded bg-main border-border grid grid-cols-4 gap-2'>
                    <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                        <data.icon/>
                    </div>
                    <div className='col-span-3'>
                        <h2>{data.title}</h2>
                        <p className='mt-2 font-bold'>{data.total}</p>
                    </div>
                </div>
            ))}
        </div>
        <h3 className='text-md font-medium my-6 italic text-border'>Recent Movies</h3>
        {
              isLoading || deleteLoading ?(
                <FiLoader />) : movies.length > 0 ? 
                (<MovieTable data={movies?.slice(0,5)} admin={true}
                onDeleteHandler={deleteMovieHandler} />
                ) : (
                <Empty message="Hiện đang trống !"/>
              
            )}
    </SideBar>
  )
}

export default Dashboard