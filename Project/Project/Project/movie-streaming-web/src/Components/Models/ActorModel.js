import React, { useEffect, useState } from 'react';
import { Input } from '../UseInput';
import MainModels from './MainModels';
import Uploader from '../Uploader';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateCastAction, addCastAction } from '../../Redux/Actions/MoviesActions';
import { toast } from 'react-hot-toast';
import { InlineError } from '../Notfications/Error';
import { Imageepreview } from '../imageepreview';

function ActorModel({ modelOpen, setModelOpen, actor }) {
  const dispatch = useDispatch();
  const [castImage, setCastImage] = useState('');
  const generatedId = Math.floor(Math.random() * 100000000);
  const image = castImage ? castImage : actor?.image;
  

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required('Cast Name is required'),
      })
    ),
  });

  const onSubmit = (data) => {
    if (actor) {
      dispatch(
        updateCastAction({
          ...data,
          image: image,
          id: actor.id,
        })
      );
      toast.success('Đã cập nhật thành công!');
    } else {
      dispatch(
        addCastAction({
          ...data,
          image: image,
          id: generatedId,
        })
      );
      toast.success('Đã tạo thành công!');
    }
    reset();
    setCastImage('');
    setModelOpen(false);
  };

  useEffect(() => {
    if (actor) {
      setValue('name', actor?.name);
    }
  }, [actor, setValue]);

  return (
    <MainModels modelOpen={modelOpen} setModelOpen={setModelOpen}>
      <div className='inline-block sm:w-4/5 border border-border bg-main text-white rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full'>
        <h2 className='text-3xl font-bold'>{actor ? 'Update Actor/Actress' : 'Add Actor/Actress'}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 text-left mt-6'>
          <div className='w-full'>
            <Input
              label='Actor name'
              placeholder='Ex: Johnny Depp'
              type='text'
              name='name'
              register={register('name')}
              bg={true}
            />
            {errors.name && <InlineError text={errors.name.message} />}
          </div>
          <p className='text-border font-semibold text-sm h-1'>Actor/Actress Image</p>
          <Uploader setImageUrl={setCastImage} />
          <Imageepreview image={image || '/images/user.png'} name='castImage' />
          <button
            type='submit'
            onClick={() => setModelOpen(false)}
            className='w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'>
            {actor ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </MainModels>
  );
}

export default ActorModel;
