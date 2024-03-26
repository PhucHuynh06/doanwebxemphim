import React from 'react';
import SideBar from '../SideBar';
import { Input, Message, Select } from '../../../Components/UseInput';
import Uploader from './../../../Components/Uploader';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { ImUpload } from 'react-icons/im';
import ActorModel from '../../../Components/Models/ActorModel';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { movieValidation } from '../../../Components/Validation/MovieValidation';
import { createMovieAction, removeCastAction } from '../../../Redux/Actions/MoviesActions';
import { toast } from 'react-hot-toast';
import { InlineError } from '../../../Components/Notfications/Error';
import { Imageepreview } from '../../../Components/imageepreview';

function AddMovie() {
    const [modelOpen, setModelOpen] = useState(false)
    const [actor, setActor] = useState(null)
    const [imageWithoutTitle, setImageWithoutTitle] = useState("");
    const [imageTitle, setImageTitle]= useState("");
    const [videUrl, setVideoUrl] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //use Selectors
    const {categories} = useSelector(state =>state.categoryGetAll);
    const { isLoading, isError, isSuccess } = useSelector(
        (state) => state.createMovie
    );
    const{casts} = useSelector((state) => state.casts);


    // validate movie
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(movieValidation),
    });




    // on submit
    const onSubmit = (data) => {
        dispatch(createMovieAction({
            ...data,
            image: imageWithoutTitle,
            titleImage: imageTitle,
            video: videUrl,
            casts,
        }));
    };


    //delete cast handler
    const deleteCastHandler = (id) =>{
        dispatch(removeCastAction(id))
        toast.success("Đã xoá diễn viên thành công !")
    };



    useEffect(() => {
        //
        if(modelOpen === false) {
            setActor();
        }
        //
        if(isSuccess){
            reset({
                name:"",
                time:0,
                language:"",
                year:0,
                category:"",
                desc:"",
            });
            setImageTitle("");
            setImageWithoutTitle("");
            setVideoUrl("");
            dispatch({ type: "CREATE_MOVIE_RESET"});
            navigate("/addMovie");
        }
        if(isError){
            toast.error("Có lỗi đã xảy ra !");
            dispatch({ type: "CREATE_MOVIE_RESET"});
        }
    }, [modelOpen, isSuccess, isError, dispatch, reset, navigate]);


  return (
    <SideBar>
      <ActorModel 
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        actor={actor}/>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Add Movie</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'></div>
        <div className='w-full'>
            <Input
                label="Movie Title"
                placeholder="Ex: Game Of Cube"
                type="text"
                bg={true}
                name='name'
                register={register("name")}
                >
            </Input>
            {errors.name && (<InlineError text={errors.name.message} />)}
        </div>
        <div className='w-full'>
        <Input
            label="Hour"
            placeholder="Ex: 4hr"
            type="number"
            bg={true}
            name='time'
            register={register("time")}
        ></Input>
        {errors.time && (<InlineError text={errors.time.message} />)}
        </div>
        <div className='w-full'>
        <Input
          label="Language Used"
          placeholder="Ex: English"
          type="text"
          bg={true}
          name='language'
          register={register("language")}
        ></Input>
        {errors.language && (<InlineError text={errors.language.message} />)}
        </div>
        <div className='w-full'>
        <Input
          label="Release Year"
          placeholder="Ex: 2014"
          type="number"
          bg={true}
          name='year'
          register={register("year")}
        ></Input>
        {errors.year && (<InlineError text={errors.year.message} />)}
        </div>
       
       {/* IMAGES */}
        <div className='w-full gird md:grid-cols-2 gap-6'>
            {/* img without title */}
            <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Ảnh không có tiêu đề 
                </p>
                <Uploader setImageUrl={setImageWithoutTitle} />
                <Imageepreview image = {imageWithoutTitle} name = "imageWithoutTitle"/>
            </div>
             {/* img wit title */}
             <div className='flex flex-col gap-2'>
                <p className='text-border font-semibold text-sm'>
                    Ảnh có tiêu đề 
                </p>
                <Uploader setImageUrl={setImageTitle} />
                <Imageepreview image = {imageTitle} name = "imageTitle"/>
            </div>
        </div>
        {/* DESCRIPTION */}
        <div className='w-full'>
            <Message 
                labe="Movie Description"
                placeholder="Make it short and sweet"
                name="desc"
                register={{...register("desc"),}}
            />
        {errors.descr && (<InlineError text={errors.desc.message} />)}
        </div>
        {/* CATEGORY */}
        <div className='text-sm w-full'>
            <Select label ="Movie Cateogory" options={
                categories?.length > 0
                ? categories: []} 
                name ="category"
                register={{...register("category")}}
                />
        {errors.category && (<InlineError text={errors.category.message} />)}
        </div>
        {/* MOVIE VIEDEO*/}
        <div className='flex flex-col gap-2 w-full'>
            <label className='text-border font-semibold text-sm'>
                Movie video
            </label>
            <div className={`w-full gird ${videUrl && "md:grid-cols-2"} gap-6`}>
                {
                    videUrl && (
                        <div className='w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-colo'>
                            Đã Upload !
                        </div>
                    )
                }
            </div>
            <Uploader setImageUrl={setVideoUrl}/>
        </div>
        {/* CASTS */}
        <button 
            onClick={() => setModelOpen(true)}
            className='w-full py-4 bg-main border border-subMain text-white rounded'>
                Add Actor
        </button>
        <div className='grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
            {casts?.length > 0 && casts?.map((user) => (
                <div
                    key={user.id}
                    className='p-2 italic text-xs text-text rounded flex-colo bg-main border'>
                        <img
                            src={`${user?.image ? user.image : '/images/user.png'}`}
                            alt={user.name}
                            className='w-full h-24 object-cover rounded mb-2'/>
                        <p>{user.name}</p>
                        <div className='flex justify-center mt-2 w-full gap-2'>
                            <button onClick={
                                () => deleteCastHandler(user?.id)
                            }className='w-7 h-7 text-lg flex-colo bg-dry border border-border text-subMain rounded'>
                                <MdDelete/>
                            </button>
                            <button 
                                onClick={() => {
                                    setActor(user)
                                    setModelOpen(true)
                                }}
                                className='w-7 h-7 text-lg flex-colo bg-dry border border-border text-green-800 rounded'>
                                    <FaEdit/>
                            </button>
                        </div>
                </div>
            ))}
        </div>

        <button
        disabled={isLoading} 
        onClick={handleSubmit(onSubmit)} 
        className="bg-subMain w-full flex justify-center items-center gap-6 font-medium  text-white py-5 rounded">
            {
                isLoading ? "Please wait..." : <>
                 <ImUpload/> Đăng Phim
                </>
            }
        </button>
      </div>
    </SideBar>
  )
}

export default AddMovie