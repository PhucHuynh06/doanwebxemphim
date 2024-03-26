import React from 'react'
import { FiUser } from 'react-icons/fi'

function Promo() {
  const hover = 'hover:text-dryGray transitions';
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed'>
            Tải ứng dụng để có thể xem trên điện thoại của bạn.
          </h1>
          <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
            Với trang web phát trực tuyến phim của chúng tôi, giờ đây bạn có thể tải trực tiếp các bộ phim yêu thích của mình về điện thoại di động và xem ngoại tuyến, bất cứ nơi nào và bất cứ khi nào bạn muốn.
            Trang web của chúng tôi cung cấp trải nghiệm liền mạch và thân thiện với người dùng, cho phép bạn nhanh chóng và dễ dàng tìm thấy những bộ phim bạn muốn tải xuống.
            Bạn có thể chọn từ nhiều chất lượng video khác nhau để phù hợp với thiết bị và dung lượng lưu trữ của mình, đảm bảo rằng bạn có được trải nghiệm xem tốt nhất có thể.
            Vì vậy, cho dù bạn đang trên một chuyến bay dài, bạn có thể ngồi xuống, thư giãn và thưởng thức những bộ phim yêu thích của mình mà không gặp bất kỳ sự cố về bộ đệm hoặc kết nối internet nào.
          </p>
          <div className='flex gap-4 md:text-lg text-sm'>
            <div className='flex gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
              <button className={hover}>
                Tải Ứng Dụng
              </button>
            </div>
            <div className='flex items-center gap-4 bg-black text-subMain px-6 py-3 rounded font-bold'>
              <FiUser/> 14.4 M+
            </div>
          </div>
        </div>
        <div>
          <img 
            src='/images/mobile.png' 
            alt='Mobile App'
            className='w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Promo